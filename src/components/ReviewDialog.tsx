import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Star } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface ReviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  movieId: string;
  movieTitle: string;
  onReviewSubmitted?: () => void;
}

export function ReviewDialog({
  open,
  onOpenChange,
  movieId,
  movieTitle,
  onReviewSubmitted,
}: ReviewDialogProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });
  }, []);

  const handleStarClick = (star: number, isHalf: boolean) => {
    setRating(isHalf ? star - 0.5 : star);
  };

  const handleStarHover = (star: number, isHalf: boolean) => {
    setHoveredRating(isHalf ? star - 0.5 : star);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      toast.error("로그인이 필요합니다");
      return;
    }

    if (rating === 0) {
      toast.error("평점을 선택해주세요");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.from("reviews").upsert(
        {
          user_id: user.id,
          movie_id: movieId,
          rating,
          comment: comment.trim() || null,
        },
        {
          onConflict: "user_id,movie_id",
        }
      );

      if (error) throw error;

      toast.success("리뷰가 등록되었습니다!");
      onOpenChange(false);
      setRating(0);
      setComment("");
      onReviewSubmitted?.();
    } catch (error: any) {
      toast.error("리뷰 등록 실패", {
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#242a32] border-[#4e5968] text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">리뷰 작성</DialogTitle>
          <DialogDescription className="text-[#4e5968]">
            {movieTitle}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          {/* 별점 선택 */}
          <div className="space-y-2">
            <label className="text-sm text-white">평점</label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => {
                const currentRating = hoveredRating || rating;
                const isFull = star <= currentRating;
                const isHalf = star - 0.5 === currentRating;
                
                return (
                  <div
                    key={star}
                    className="relative cursor-pointer transition-transform hover:scale-110"
                    onMouseLeave={() => setHoveredRating(0)}
                  >
                    {/* 왼쪽 반쪽 - 반개 */}
                    <div
                      className="absolute left-0 top-0 w-1/2 h-full z-10"
                      onClick={() => handleStarClick(star, true)}
                      onMouseEnter={() => handleStarHover(star, true)}
                    />
                    {/* 오른쪽 반쪽 - 전체 */}
                    <div
                      className="absolute right-0 top-0 w-1/2 h-full z-10"
                      onClick={() => handleStarClick(star, false)}
                      onMouseEnter={() => handleStarHover(star, false)}
                    />
                    {/* 별 아이콘 */}
                    <div className="relative">
                      {isHalf ? (
                        <div className="relative">
                          <Star className="w-7 h-7 text-[#4e5968]" />
                          <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                            <Star className="w-7 h-7 fill-[#fbb343] text-[#fbb343]" />
                          </div>
                        </div>
                      ) : (
                        <Star
                          className={`w-7 h-7 ${
                            isFull
                              ? "fill-[#fbb343] text-[#fbb343]"
                              : "text-[#4e5968]"
                          }`}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
              <span className="ml-2 text-[#fbb343]">
                {rating > 0 ? `${rating}/5` : ""}
              </span>
            </div>
          </div>

          {/* 코멘트 */}
          <div className="space-y-2">
            <label className="text-sm text-white">
              코멘트 <span className="text-[#4e5968]">(선택사항)</span>
            </label>
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="이 영화에 대한 생각을 남겨주세요..."
              className="bg-[#4e5968]/20 border-[#4e5968] text-white placeholder:text-[#4e5968] min-h-[120px] resize-none"
              maxLength={500}
            />
            <p className="text-xs text-[#4e5968] text-right">
              {comment.length}/500
            </p>
          </div>

          <Button
            type="submit"
            disabled={loading || rating === 0}
            className="w-full bg-[#fbb343] text-[#242a32] hover:bg-[#fbb343]/90 h-11"
          >
            {loading ? "등록 중..." : "리뷰 등록"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}