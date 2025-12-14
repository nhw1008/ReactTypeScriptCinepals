import { useState, useEffect } from "react";
import { Header } from "./Header";
import { ScrollToTop } from "./ScrollToTop";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ReviewDialog } from "./ReviewDialog";
import { supabase } from "../lib/supabase";
import { toast } from "sonner@2.0.3";
import {
  Star,
  Heart,
  Share2,
  Clock,
  Calendar,
  Film,
  Play,
  ChevronLeft,
} from "lucide-react";

interface Movie {
  id: string;
  title: string;
  genre: string;
  rating: number;
  runtime: number;
  releaseDate: string;
  posterUrl: string;
  description: string;
  ageRating: string;
  director?: string;
  cast?: string[];
  backdropUrl?: string;
  trailerUrl?: string;
}

interface Review {
  id: string;
  user_name: string;
  rating: number;
  content: string;
  created_at: string;
}

interface MovieDetailPageProps {
  movieId: string;
}

export function MovieDetailPage({ movieId }: MovieDetailPageProps) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isWatchlisted, setIsWatchlisted] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [reviewDialogOpen, setReviewDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userRating, setUserRating] = useState(0);
  const [activeTab, setActiveTab] = useState("details");

  useEffect(() => {
    loadMovieData();
    loadReviews();
    
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      if (user) {
        checkWatchlist(user.id);
        checkUserRating(user.id);
      }
    });
  }, [movieId]);

  const loadMovieData = async () => {
    setLoading(true);
    
    // Supabase에서 데이터 로드 시도
    const { data } = await supabase
      .from("movies")
      .select("*")
      .eq("id", movieId)
      .single();

    if (data) {
      setMovie({
        id: data.id,
        title: data.title,
        genre: data.genre,
        rating: data.rating,
        runtime: data.runtime,
        releaseDate: data.release_date,
        posterUrl: data.poster_url,
        description: data.description,
        ageRating: data.age_rating,
        director: data.director || "크리스토퍼 놀란",
        cast: data.cast || ["킬리언 머피", "에밀리 블런트", "맷 데이먼"],
        backdropUrl: data.backdrop_url || data.poster_url,
        trailerUrl: data.trailer_url,
      });
    } else {
      // 더미 데이터 fallback (MovieSlider에서 온 경우)
      const dummyMovies: { [key: string]: Movie } = {
        "1": {
          id: "1",
          title: "대양으로의 모험",
          genre: "SF/액션",
          rating: 8.5,
          runtime: 148,
          releaseDate: "2024-12-01",
          posterUrl: "https://images.unsplash.com/photo-1644772310791-deb96e24ee65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZmljdGlvbiUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzYyNjE4MTk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
          description: "우주를 배경으로 한 스릴 넘치는 모험. 인류의 미래가 걸린 위대한 여정이 시작된다.",
          ageRating: "12세",
          director: "데니스 빌뇌브",
          cast: ["티모시 샬라메", "젠데이아", "레베카 퍼거슨"],
          backdropUrl: "https://images.unsplash.com/photo-1644772310791-deb96e24ee65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZmljdGlvbiUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzYyNjE4MTk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        },
        "2": {
          id: "2",
          title: "베를린에서의 겨울",
          genre: "로맨스/드라마",
          rating: 7.2,
          runtime: 120,
          releaseDate: "2024-11-15",
          posterUrl: "https://images.unsplash.com/photo-1708787788824-07d6d97b0111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMG1vdmllJTIwY291cGxlfGVufDF8fHx8MTc2MjY2MTMzMnww&ixlib=rb-4.1.0&q=80&w=1080",
          description: "사랑과 이별, 그리고 재회의 이야기. 추운 겨울 베를린에서 펼쳐지는 감동적인 드라마.",
          ageRating: "15세",
          director: "그레타 거윅",
          cast: ["시얼샤 로넌", "티모시 샬라메", "플로렌스 퓨"],
          backdropUrl: "https://images.unsplash.com/photo-1708787788824-07d6d97b0111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMG1vdmllJTIwY291cGxlfGVufDF8fHx8MTc2MjY2MTMzMnww&ixlib=rb-4.1.0&q=80&w=1080",
        },
        "3": {
          id: "3",
          title: "더 블레이드",
          genre: "액션/스릴러",
          rating: 8.5,
          runtime: 115,
          releaseDate: "2024-12-08",
          posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZXxlbnwxfHx8fDE3NjI2MTgyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
          description: "복수를 위해 칼을 든 전사의 이야기. 피할 수 없는 운명과 마주한다.",
          ageRating: "청불",
          director: "박찬욱",
          cast: ["박해일", "김민희", "조진웅"],
          backdropUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZXxlbnwxfHx8fDE3NjI2MTgyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
      };
      
      if (dummyMovies[movieId]) {
        setMovie(dummyMovies[movieId]);
      }
    }
    setLoading(false);
  };

  const loadReviews = async () => {
    const { data } = await supabase
      .from("reviews")
      .select("*")
      .eq("movie_id", movieId)
      .order("created_at", { ascending: false });

    if (data) {
      setReviews(data);
    }
  };

  const checkWatchlist = async (userId: string) => {
    const { data } = await supabase
      .from("watchlist")
      .select("id")
      .eq("user_id", userId)
      .eq("movie_id", movieId)
      .single();

    setIsWatchlisted(!!data);
  };

  const checkUserRating = async (userId: string) => {
    const { data } = await supabase
      .from("reviews")
      .select("rating")
      .eq("user_id", userId)
      .eq("movie_id", movieId)
      .single();

    if (data) {
      setUserRating(data.rating);
    }
  };

  const toggleWatchlist = async () => {
    if (!user) {
      toast.error("로그인이 필요합니다");
      return;
    }

    try {
      if (isWatchlisted) {
        await supabase
          .from("watchlist")
          .delete()
          .eq("user_id", user.id)
          .eq("movie_id", movieId);
        setIsWatchlisted(false);
        toast.success("찜 목록에서 제거되었습니다");
      } else {
        await supabase.from("watchlist").insert({
          user_id: user.id,
          movie_id: movieId,
        });
        setIsWatchlisted(true);
        toast.success("찜 목록에 추가되었습니다");
      }
    } catch (error) {
      toast.error("오류가 발생했습니다");
    }
  };

  const handleShare = () => {
    const url = window.location.href;
    // Clipboard API가 차단된 환경에서는 fallback
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(
        () => toast.success("링크가 복사되었습니다"),
        () => toast.info(`URL: ${url}`)
      );
    } else {
      // Fallback: URL 표시
      toast.info(`URL: ${url}`);
    }
  };

  const getRatingDistribution = () => {
    const distribution = [0, 0, 0, 0, 0];
    reviews.forEach((review) => {
      const index = Math.ceil(review.rating) - 1;
      if (index >= 0 && index < 5) {
        distribution[index]++;
      }
    });
    return distribution.reverse();
  };

  if (loading || !movie) {
    return (
      <div className="max-w-[1440px] w-full min-h-screen bg-[#242a32] mx-auto">
        <Header />
        <div className="flex items-center justify-center h-96">
          <p className="text-[#4e5968]">로딩 중...</p>
        </div>
      </div>
    );
  }

  const ratingDistribution = getRatingDistribution();
  const maxRating = Math.max(...ratingDistribution, 1);

  return (
    <div className="max-w-[1440px] w-full min-h-screen bg-[#242a32] mx-auto">
      <ScrollToTop />
      <Header />

      {/* Hero Section with Backdrop */}
      <div className="relative">
        {/* Backdrop Image */}
        <div className="absolute inset-0 h-[500px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#242a32]/50 to-[#242a32]" />
          <ImageWithFallback
            src={movie.backdropUrl || movie.posterUrl}
            alt={movie.title}
            className="w-full h-full object-cover blur-xl opacity-30"
          />
        </div>

        {/* Content */}
        <div className="relative px-20 pt-12 pb-16">
          {/* Back Button */}
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="mb-6 border-[#4e5968]/40 text-white hover:bg-[#4e5968]/30 bg-transparent"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            뒤로가기
          </Button>

          <div className="grid grid-cols-12 gap-8">
            {/* Poster */}
            <div className="col-span-3">
              <div className="aspect-[2/3] rounded-xl overflow-hidden border-2 border-[#4e5968]/30 shadow-2xl">
                <ImageWithFallback
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Movie Info */}
            <div className="col-span-9 space-y-6">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-white text-4xl mb-2">{movie.title}</h1>
                    <p className="text-[#4e5968]">
                      {movie.director} 감독 · {movie.releaseDate}
                    </p>
                  </div>
                </div>

                {/* Metadata */}
                <div className="flex items-center gap-4 mb-6">
                  <Badge className="bg-white/10 text-white border border-white/20">
                    {movie.ageRating}
                  </Badge>
                  <div className="flex items-center gap-2 text-[#4e5968]">
                    <Film className="w-4 h-4" />
                    <span>{movie.genre}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#4e5968]">
                    <Clock className="w-4 h-4" />
                    <span>{movie.runtime}분</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#4e5968]">
                    <Calendar className="w-4 h-4" />
                    <span>{movie.releaseDate}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="w-6 h-6 fill-[#fbb343] text-[#fbb343]" />
                    <span className="text-3xl text-white">{movie.rating}</span>
                    <span className="text-[#4e5968]">/ 5.0</span>
                  </div>
                  <div className="text-[#4e5968]">
                    {reviews.length}개의 평가
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <Button
                    onClick={toggleWatchlist}
                    variant="outline"
                    className={`border-[#4e5968]/40 ${
                      isWatchlisted
                        ? "bg-red-500/20 text-red-500 border-red-500/40"
                        : "text-white hover:bg-[#4e5968]/30 bg-transparent"
                    }`}
                  >
                    <Heart
                      className={`w-4 h-4 mr-2 ${
                        isWatchlisted ? "fill-red-500" : ""
                      }`}
                    />
                    {isWatchlisted ? "찜 해제" : "찜하기"}
                  </Button>
                  <Button
                    onClick={() => setReviewDialogOpen(true)}
                    className="bg-[#fbb343] text-[#242a32] hover:bg-[#fbb343]/90"
                  >
                    <Star className="w-4 h-4 mr-2" />
                    {userRating > 0 ? "평가 수정" : "평가하기"}
                  </Button>
                  <Button
                    onClick={handleShare}
                    variant="outline"
                    className="border-[#4e5968]/40 text-white hover:bg-[#4e5968]/30 bg-transparent"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    공유
                  </Button>
                  {movie.trailerUrl && (
                    <Button
                      onClick={() => window.open(movie.trailerUrl, "_blank")}
                      variant="outline"
                      className="border-[#4e5968]/40 text-white hover:bg-[#4e5968]/30 bg-transparent"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      예고편
                    </Button>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-white mb-3">줄거리</h3>
                <p className="text-[#4e5968] leading-relaxed">
                  {movie.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="px-20 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="bg-[#4e5968]/20 border border-[#4e5968]/40 mb-8">
            <TabsTrigger
              value="details"
              className="data-[state=active]:bg-[#4e5968]/50 data-[state=active]:text-white"
            >
              상세정보
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="data-[state=active]:bg-[#4e5968]/50 data-[state=active]:text-white"
            >
              리뷰 ({reviews.length})
            </TabsTrigger>
            <TabsTrigger
              value="cast"
              className="data-[state=active]:bg-[#4e5968]/50 data-[state=active]:text-white"
            >
              출연/제작
            </TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-8">
            {/* Rating Distribution */}
            <div>
              <h3 className="text-white mb-6">별점 분포</h3>
              <div className="space-y-3">
                {[5, 4, 3, 2, 1].map((stars, index) => (
                  <div key={stars} className="flex items-center gap-4">
                    <div className="flex items-center gap-1 w-16">
                      <Star className="w-4 h-4 fill-[#fbb343] text-[#fbb343]" />
                      <span className="text-white">{stars}</span>
                    </div>
                    <div className="flex-1 h-8 bg-[#4e5968]/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#fbb343] transition-all"
                        style={{
                          width: `${(ratingDistribution[index] / maxRating) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-[#4e5968] w-12 text-right">
                      {ratingDistribution[index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            {reviews.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-[#4e5968] mb-4">
                  아직 리뷰가 없습니다
                </p>
                <Button
                  onClick={() => setReviewDialogOpen(true)}
                  className="bg-[#fbb343] text-[#242a32] hover:bg-[#fbb343]/90"
                >
                  첫 리뷰 작성하기
                </Button>
              </div>
            ) : (
              reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-[#4e5968]/10 border border-[#4e5968]/30 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#4e5968]/30 flex items-center justify-center">
                        <span className="text-white">
                          {review.user_name?.[0] || "U"}
                        </span>
                      </div>
                      <div>
                        <p className="text-white">{review.user_name}</p>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < review.rating
                                  ? "fill-[#fbb343] text-[#fbb343]"
                                  : "text-[#4e5968]"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-[#4e5968] text-sm">
                      {new Date(review.created_at).toLocaleDateString("ko-KR")}
                    </span>
                  </div>
                  <p className="text-[#4e5968] leading-relaxed">
                    {review.content}
                  </p>
                </div>
              ))
            )}
          </TabsContent>

          <TabsContent value="cast" className="space-y-6">
            <div>
              <h3 className="text-white mb-4">감독</h3>
              <div className="flex items-center gap-4 p-4 bg-[#4e5968]/10 border border-[#4e5968]/30 rounded-xl">
                <div className="w-16 h-16 rounded-full bg-[#4e5968]/30 flex items-center justify-center">
                  <Film className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-white">{movie.director}</p>
                  <p className="text-[#4e5968] text-sm">감독</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white mb-4">출연</h3>
              <div className="grid grid-cols-3 gap-4">
                {movie.cast?.map((actor, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-[#4e5968]/10 border border-[#4e5968]/30 rounded-xl"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#4e5968]/30 flex items-center justify-center">
                      <span className="text-white">{actor[0]}</span>
                    </div>
                    <p className="text-white">{actor}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Review Dialog */}
      <ReviewDialog
        open={reviewDialogOpen}
        onOpenChange={setReviewDialogOpen}
        movieId={movieId}
        movieTitle={movie.title}
        onReviewSubmitted={() => {
          loadReviews();
          if (user) checkUserRating(user.id);
        }}
      />
    </div>
  );
}