import { useState, useEffect } from "react";
import { Header } from "./Header";
import { ScrollToTop } from "./ScrollToTop";
import { Toaster } from "./ui/sonner";
import { supabase } from "../lib/supabase";
import { Movie } from "./MovieCard";
import { ReviewDialog } from "./ReviewDialog";
import { ArrowLeft, Star, Heart, Film } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface MovieList {
  id: string;
  title: string;
  description: string;
  cover_image: string;
  created_by: string;
  created_at: string;
}

interface ListDetailPageProps {
  listId: string;
}

export function ListDetailPage({ listId }: ListDetailPageProps) {
  const [list, setList] = useState<MovieList | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [reviewDialogOpen, setReviewDialogOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [watchlist, setWatchlist] = useState<Set<string>>(new Set());
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    loadListDetail();
    checkAuth();
  }, [listId]);

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
    if (user) {
      loadWatchlist(user.id);
    }
  };

  const loadWatchlist = async (userId: string) => {
    const { data } = await supabase
      .from("watchlist")
      .select("movie_id")
      .eq("user_id", userId);
    
    if (data) {
      setWatchlist(new Set(data.map(item => item.movie_id)));
    }
  };

  const toggleWatchlist = async (movieId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (!user) {
      const { toast } = await import("sonner@2.0.3");
      toast.error("로그인이 필요합니다");
      return;
    }

    try {
      if (watchlist.has(movieId)) {
        await supabase
          .from("watchlist")
          .delete()
          .eq("user_id", user.id)
          .eq("movie_id", movieId);
        setWatchlist(prev => {
          const next = new Set(prev);
          next.delete(movieId);
          return next;
        });
        const { toast } = await import("sonner@2.0.3");
        toast.success("찜 목록에서 제거되었습니다");
      } else {
        await supabase.from("watchlist").insert({
          user_id: user.id,
          movie_id: movieId,
        });
        setWatchlist(prev => new Set(prev).add(movieId));
        const { toast } = await import("sonner@2.0.3");
        toast.success("찜 목록에 추가되었습니다");
      }
    } catch (error) {
      const { toast } = await import("sonner@2.0.3");
      toast.error("오류가 발생했습니다");
    }
  };

  const loadListDetail = async () => {
    setLoading(true);

    // 리스트 정보 로드
    const { data: listData } = await supabase
      .from("lists")
      .select("*")
      .eq("id", listId)
      .single();

    if (listData) {
      setList({
        id: listData.id,
        title: listData.title,
        description: listData.description,
        cover_image: listData.cover_image,
        created_by: listData.created_by,
        created_at: listData.created_at,
      });
    }

    // 리스트에 포함된 영화들 로드
    const { data: listMoviesData } = await supabase
      .from("list_movies")
      .select(`
        order,
        movies (*)
      `)
      .eq("list_id", listId)
      .order("order", { ascending: true });

    if (listMoviesData) {
      setMovies(
        listMoviesData.map((item: any) => ({
          id: item.movies.id,
          title: item.movies.title,
          genre: item.movies.genre,
          rating: item.movies.rating,
          runtime: item.movies.runtime,
          releaseDate: item.movies.release_date,
          posterUrl: item.movies.poster_url,
          description: item.movies.description,
          ageRating: item.movies.age_rating,
        }))
      );
    }

    setLoading(false);
  };

  const handleBack = () => {
    window.history.pushState({}, "", "/lists");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="max-w-[1440px] w-full min-h-screen bg-[#242a32] mx-auto">
      <Toaster position="top-center" />
      <ScrollToTop />
      <Header />

      <div className="px-20 py-16">
        {loading ? (
          <div className="text-center text-[#4e5968] py-20">
            리스트를 불러오는 중...
          </div>
        ) : list ? (
          <>
            {/* Back Button */}
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-[#4e5968] hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>리스트 목록으로</span>
            </button>

            {/* List Header */}
            <div className="mb-12">
              <div className="flex gap-8 items-start">
                {/* Cover Image */}
                <div className="w-80 aspect-[3/2] rounded-lg overflow-hidden bg-[#4e5968]/20 flex-shrink-0">
                  <ImageWithFallback
                    src={list.cover_image}
                    alt={list.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* List Info */}
                <div className="flex-1">
                  <h1 className="text-white mb-3">{list.title}</h1>
                  <p className="text-[#4e5968] mb-6 leading-relaxed">
                    {list.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-[#4e5968]">
                      <Film className="w-4 h-4" />
                      <span>{movies.length}편의 영화</span>
                    </div>
                    <span className="text-[#4e5968]">•</span>
                    <span className="text-[#4e5968]">
                      {new Date(list.created_at).toLocaleDateString("ko-KR")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Movies Grid */}
            <div>
              <h2 className="text-white mb-6">리스트 영화</h2>
              {movies.length === 0 ? (
                <div className="text-center py-20 border border-[#4e5968]/30 rounded-lg">
                  <Film className="w-16 h-16 text-[#4e5968] mx-auto mb-4" />
                  <p className="text-[#4e5968]">이 리스트에 영화가 없습니다</p>
                </div>
              ) : (
                <div className="grid grid-cols-5 gap-6">
                  {movies.map((movie) => (
                    <div key={movie.id} className="group cursor-pointer bg-[#1a1f26] rounded-lg overflow-hidden border border-[#4e5968]/30 hover:border-[#FBB343]/50 transition-all">
                      {/* Poster */}
                      <div className="aspect-[2/3] relative overflow-hidden">
                        <ImageWithFallback
                          src={movie.posterUrl}
                          alt={movie.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />

                        {/* Heart Button */}
                        <button
                          onClick={(e) => toggleWatchlist(movie.id, e)}
                          className="absolute top-2 right-2 p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all z-10"
                        >
                          <Heart
                            className={`w-4 h-4 ${
                              watchlist.has(movie.id)
                                ? "fill-red-500 text-red-500"
                                : "text-white"
                            }`}
                          />
                        </button>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <div className="w-full space-y-2">
                            <Button
                              size="sm"
                              onClick={() => {
                                setSelectedMovie(movie);
                                setReviewDialogOpen(true);
                              }}
                              variant="outline"
                              className="w-full border-white/50 text-white hover:bg-white/10 bg-transparent h-9"
                            >
                              리뷰 쓰기
                            </Button>
                            <Button
                              size="sm"
                              className="w-full bg-[#FBB343] hover:bg-[#fbc05e] text-[#242A32] h-9"
                            >
                              상세정보
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Movie Info - Always Visible */}
                      <div className="p-4">
                        <h3 className="text-white mb-2 line-clamp-1">{movie.title}</h3>
                        <p className="text-[#4e5968] text-sm mb-3">{movie.genre}</p>
                        <div className="flex items-center gap-1 text-[#FBB343]">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm">{movie.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-[#4e5968]">리스트를 찾을 수 없습니다</p>
            <Button
              onClick={handleBack}
              className="mt-4 bg-[#FBB343] hover:bg-[#fbc05e] text-[#242A32]"
            >
              리스트 목록으로
            </Button>
          </div>
        )}
      </div>

      {/* Review Dialog */}
      <ReviewDialog
        open={reviewDialogOpen}
        onOpenChange={setReviewDialogOpen}
        movieId={selectedMovie?.id || ""}
        movieTitle={selectedMovie?.title || ""}
        onReviewSubmitted={loadListDetail}
      />
    </div>
  );
}