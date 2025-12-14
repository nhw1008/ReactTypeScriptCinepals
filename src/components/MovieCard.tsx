import { useState, useEffect } from "react";
import { Star, Clock, Heart, MessageSquare } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { supabase } from "../lib/supabase";
import { toast } from "sonner@2.0.3";

export interface Movie {
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

interface MovieCardProps {
  movie: Movie;
  onBooking?: (movie: Movie) => void;
  onReview?: (movie: Movie) => void;
}

export function MovieCard({ movie, onBooking, onReview }: MovieCardProps) {
  const [isWatchlisted, setIsWatchlisted] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      if (user) {
        checkWatchlist(user.id);
      }
    });
  }, [movie.id]);

  const checkWatchlist = async (userId: string) => {
    const { data } = await supabase
      .from("watchlist")
      .select("id")
      .eq("user_id", userId)
      .eq("movie_id", movie.id)
      .single();

    setIsWatchlisted(!!data);
  };

  const toggleWatchlist = async (e: React.MouseEvent) => {
    e.stopPropagation();

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
          .eq("movie_id", movie.id);
        setIsWatchlisted(false);
        toast.success("찜 목록에서 제거되었습니다");
      } else {
        await supabase.from("watchlist").insert({
          user_id: user.id,
          movie_id: movie.id,
        });
        setIsWatchlisted(true);
        toast.success("찜 목록에 추가되었습니다");
      }
    } catch (error) {
      toast.error("오류가 발생했습니다");
    }
  };

  const handleReview = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user) {
      toast.error("로그인이 필요합니다");
      return;
    }
    onReview?.(movie);
  };

  const handleDetailClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.history.pushState({}, "", `/movies/${movie.id}`);
    window.dispatchEvent(new Event("popstate"));
  };

  return (
    <div className="group relative bg-[#1a1f26] rounded-lg overflow-hidden border border-[#4e5968]/30 hover:border-[#FBB343]/50 transition-all hover:scale-105">
      <div className="aspect-[2/3] relative overflow-hidden">
        <ImageWithFallback
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <Badge className="absolute top-2 left-2 bg-[#4e5968] text-white border-0">
          {movie.ageRating}
        </Badge>

        {/* 호버 시 버튼들 */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-end justify-between p-4">
          {/* 찜하기 버튼 */}
          <button
            onClick={toggleWatchlist}
            className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all"
          >
            <Heart
              className={`w-4 h-4 ${
                isWatchlisted
                  ? "fill-red-500 text-red-500"
                  : "text-white"
              }`}
            />
          </button>

          <div className="w-full space-y-2">
            <Button
              onClick={handleReview}
              variant="outline"
              className="w-full border-white/50 text-white hover:bg-white/10 bg-transparent"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              리뷰 작성
            </Button>
            <Button
              onClick={handleDetailClick}
              className="w-full bg-[#fbb343] text-[#242a32] hover:bg-[#fbb343]/90"
            >
              상세정보
            </Button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-white mb-2 line-clamp-1">{movie.title}</h3>
        <p className="text-[#4e5968] text-sm mb-3">{movie.genre}</p>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-[#FBB343]">
            <Star className="w-4 h-4 fill-current" />
            <span>{movie.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-[#4e5968]">
            <Clock className="w-4 h-4" />
            <span>{movie.runtime}분</span>
          </div>
        </div>
      </div>
    </div>
  );
}