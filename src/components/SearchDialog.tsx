import { useState, useEffect } from "react";
import { Search, X, Film, Star, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { supabase } from "../lib/supabase";

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
}

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

export function SearchDialog({ open, onClose }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string>("all");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  // 더미 데이터
  const dummyMovies: Movie[] = [
    {
      id: "1",
      title: "대양으로의 모험",
      genre: "SF/액션",
      rating: 8.5,
      runtime: 148,
      releaseDate: "2024-12-01",
      posterUrl: "https://images.unsplash.com/photo-1644772310791-deb96e24ee65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZmljdGlvbiUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzYyNjE4MTk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "우주를 배경으로 한 스릴 넘치는 모험",
      ageRating: "12세",
    },
    {
      id: "2",
      title: "베를린에서의 겨울",
      genre: "로맨스/드라마",
      rating: 7.2,
      runtime: 120,
      releaseDate: "2024-11-15",
      posterUrl: "https://images.unsplash.com/photo-1708787788824-07d6d97b0111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMG1vdmllJTIwY291cGxlfGVufDF8fHx8MTc2MjY2MTMzMnww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "사랑과 이별, 그리고 재회의 이야기",
      ageRating: "15세",
    },
    {
      id: "3",
      title: "더 블레이드",
      genre: "액션/스릴러",
      rating: 8.5,
      runtime: 115,
      releaseDate: "2024-12-08",
      posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZXxlbnwxfHx8fDE3NjI2MTgyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "복수를 위해 칼을 든 전사의 이야기",
      ageRating: "청불",
    },
  ];

  const genres = ["전체", "SF", "액션", "로맨스", "드라마", "스릴러", "코미디", "공포", "애니메이션"];

  useEffect(() => {
    if (open) {
      loadMovies();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setSearchQuery("");
      setSelectedGenre("all");
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    filterMovies();
  }, [searchQuery, selectedGenre, movies]);

  // ESC 키로 닫기
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  const loadMovies = async () => {
    setLoading(true);
    
    // Supabase에서 영화 로드
    const { data: supabaseMovies } = await supabase
      .from("movies")
      .select("*")
      .order("created_at", { ascending: false });

    const dbMovies = supabaseMovies?.map((m) => ({
      id: m.id,
      title: m.title,
      genre: m.genre,
      rating: m.rating,
      runtime: m.runtime,
      releaseDate: m.release_date,
      posterUrl: m.poster_url,
      description: m.description,
      ageRating: m.age_rating,
    })) || [];

    // 더미 데이터와 합치기
    setMovies([...dummyMovies, ...dbMovies]);
    setLoading(false);
  };

  const filterMovies = () => {
    let filtered = [...movies];

    // 검색어 필터
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (movie) =>
          movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          movie.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
          movie.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // 장르 필터
    if (selectedGenre !== "all") {
      filtered = filtered.filter((movie) =>
        movie.genre.toLowerCase().includes(selectedGenre.toLowerCase())
      );
    }

    setFilteredMovies(filtered);
  };

  const handleMovieClick = (movieId: string) => {
    window.history.pushState({}, "", `/movies/${movieId}`);
    window.dispatchEvent(new Event("popstate"));
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#242a32]/95 backdrop-blur-sm">
      <div className="max-w-[1440px] w-full mx-auto h-full flex flex-col">
        {/* Header */}
        <div className="px-20 py-8 border-b border-[#4e5968]/30">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4e5968]" />
              <input
                type="text"
                placeholder="영화 제목, 장르를 검색하세요..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-[#4e5968]/20 border border-[#4e5968]/40 rounded-xl px-12 py-4 text-white placeholder:text-[#4e5968] focus:outline-none focus:border-[#fbb343]/50 focus:ring-2 focus:ring-[#fbb343]/20 transition-all"
              />
            </div>
            <button
              onClick={onClose}
              className="p-3 text-[#4e5968] hover:text-white hover:bg-[#4e5968]/30 rounded-xl transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Genre Filter */}
          <div className="flex items-center gap-3 mt-6 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setSelectedGenre("all")}
              className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                selectedGenre === "all"
                  ? "bg-[#fbb343] text-[#242a32]"
                  : "bg-[#4e5968]/20 text-[#4e5968] hover:bg-[#4e5968]/30 hover:text-white"
              }`}
            >
              전체
            </button>
            {genres.slice(1).map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                  selectedGenre === genre
                    ? "bg-[#fbb343] text-[#242a32]"
                    : "bg-[#4e5968]/20 text-[#4e5968] hover:bg-[#4e5968]/30 hover:text-white"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto px-20 py-8">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-[#4e5968]">영화를 검색하는 중...</p>
            </div>
          ) : filteredMovies.length === 0 ? (
            <div className="text-center py-12">
              <Film className="w-16 h-16 text-[#4e5968] mx-auto mb-4 opacity-50" />
              <p className="text-[#4e5968] mb-2">검색 결과가 없습니다</p>
              <p className="text-[#4e5968] text-sm">다른 검색어를 입력해보세요</p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <p className="text-[#4e5968]">
                  <span className="text-white">{filteredMovies.length}개</span>의 영화를 찾았습니다
                </p>
              </div>
              <div className="grid grid-cols-5 gap-6">
                {filteredMovies.map((movie) => (
                  <button
                    key={movie.id}
                    onClick={() => handleMovieClick(movie.id)}
                    className="group text-left"
                  >
                    <div className="aspect-[2/3] rounded-xl overflow-hidden border border-[#4e5968]/30 mb-3 relative group-hover:border-[#fbb343]/50 transition-all group-hover:scale-105 duration-300">
                      <ImageWithFallback
                        src={movie.posterUrl}
                        alt={movie.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div className="flex items-center gap-2 text-white text-sm mb-2">
                            <Star className="w-4 h-4 fill-[#fbb343] text-[#fbb343]" />
                            <span>{movie.rating}</span>
                          </div>
                          <div className="flex items-center gap-2 text-white text-sm">
                            <Clock className="w-4 h-4" />
                            <span>{movie.runtime}분</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white mb-1 line-clamp-1 group-hover:text-[#fbb343] transition-colors">
                        {movie.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-white/10 text-[#4e5968] border-0 text-xs">
                          {movie.ageRating}
                        </Badge>
                        <span className="text-[#4e5968] text-sm">{movie.genre}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
