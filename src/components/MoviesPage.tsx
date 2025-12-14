import { useState, useEffect } from "react";
import { Header } from "./Header";
import { ScrollToTop } from "./ScrollToTop";
import { Toaster } from "./ui/sonner";
import { supabase } from "../lib/supabase";
import { Movie } from "./MovieCard";
import { ReviewDialog } from "./ReviewDialog";
import { Star, Heart } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function MoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [genre, setGenre] = useState("전체");
  const [sortBy, setSortBy] = useState("인기순");
  const [reviewDialogOpen, setReviewDialogOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [watchlist, setWatchlist] = useState<Set<string>>(new Set());
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    loadMovies();
    checkAuth();
  }, []);

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

  const loadMovies = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("movies")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) {
      setMovies(
        data.map((m) => ({
          id: m.id,
          title: m.title,
          genre: m.genre,
          rating: m.rating,
          runtime: m.runtime,
          releaseDate: m.release_date,
          posterUrl: m.poster_url,
          description: m.description,
          ageRating: m.age_rating,
        }))
      );
    }
    setLoading(false);
  };

  const genres = ["전체", "액션", "드라마", "SF", "코미디", "스릴러", "로맨스"];

  const filteredMovies = movies
    .filter((m) => genre === "전체" || m.genre === genre)
    .sort((a, b) => {
      if (sortBy === "평점순") return b.rating - a.rating;
      if (sortBy === "최신순") return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
      return 0;
    });

  return (
    <div className="max-w-[1440px] w-full min-h-screen bg-[#242a32] mx-auto">
      <Toaster position="top-center" />
      <ScrollToTop />
      <Header />

      <div className="px-20 py-16">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-white mb-2">모든 영화</h1>
          <p className="text-[#4e5968]">현재 상영중인 모든 영화를 확인하세요</p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-4 mb-12 pb-6 border-b border-[#4e5968]/30">
          {/* Genre Pills */}
          <div className="flex-1 flex gap-2 overflow-x-auto scrollbar-hide">
            {genres.map((g) => (
              <button
                key={g}
                onClick={() => setGenre(g)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  genre === g
                    ? "bg-[#FBB343] text-[#242A32]"
                    : "bg-[#4e5968]/20 text-[#4e5968] hover:bg-[#4e5968]/30 hover:text-white"
                }`}
              >
                {g}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[140px] bg-[#4e5968]/20 border-[#4e5968]/40 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#242a32] border-[#4e5968] text-white">
              <SelectItem value="인기순">인기순</SelectItem>
              <SelectItem value="평점순">평점순</SelectItem>
              <SelectItem value="최신순">최신순</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Movies Grid */}
        {loading ? (
          <div className="text-center text-[#4e5968] py-20">
            영화 정보를 불러오는 중...
          </div>
        ) : (
          <div className="grid grid-cols-5 gap-6">
            {filteredMovies.map((movie) => (
              <div
                key={movie.id}
                className="group cursor-pointer bg-[#1a1f26] rounded-lg overflow-hidden border border-[#4e5968]/30 hover:border-[#FBB343]/50 transition-all"
              >
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
                        리뷰 작성
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => {
                          window.history.pushState({}, "", `/movies/${movie.id}`);
                          window.dispatchEvent(new PopStateEvent('popstate'));
                        }}
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

        {/* Empty State */}
        {!loading && filteredMovies.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#4e5968]">해당 장르의 영화가 없습니다</p>
          </div>
        )}
      </div>

      {/* Review Dialog */}
      <ReviewDialog
        open={reviewDialogOpen}
        onOpenChange={setReviewDialogOpen}
        movieId={selectedMovie?.id || ""}
        movieTitle={selectedMovie?.title || ""}
        onReviewSubmitted={loadMovies}
      />
    </div>
  );
}