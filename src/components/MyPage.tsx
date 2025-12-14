import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { Movie } from "./MovieCard";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Star, Heart, MessageSquare, Trash2 } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface Review {
  id: string;
  rating: number;
  comment: string;
  created_at: string;
  movies: Movie;
}

interface WatchlistItem {
  id: string;
  created_at: string;
  movies: Movie;
}

export function MyPage() {
  const [user, setUser] = useState<any>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    setLoading(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUser(user);

    if (user) {
      await Promise.all([loadReviews(user.id), loadWatchlist(user.id)]);
    }
    setLoading(false);
  };

  const loadReviews = async (userId: string) => {
    const { data, error } = await supabase
      .from("reviews")
      .select(
        `
        id,
        rating,
        comment,
        created_at,
        movies (*)
      `
      )
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (!error && data) {
      setReviews(data as any);
    }
  };

  const loadWatchlist = async (userId: string) => {
    const { data, error } = await supabase
      .from("watchlist")
      .select(
        `
        id,
        created_at,
        movies (*)
      `
      )
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (!error && data) {
      setWatchlist(data as any);
    }
  };

  const deleteReview = async (reviewId: string) => {
    const { error } = await supabase.from("reviews").delete().eq("id", reviewId);

    if (!error) {
      toast.success("리뷰가 삭제되었습니다");
      if (user) loadReviews(user.id);
    } else {
      toast.error("삭제 실패");
    }
  };

  const removeFromWatchlist = async (watchlistId: string) => {
    const { error } = await supabase
      .from("watchlist")
      .delete()
      .eq("id", watchlistId);

    if (!error) {
      toast.success("찜 목록에서 제거되었습니다");
      if (user) loadWatchlist(user.id);
    } else {
      toast.error("삭제 실패");
    }
  };

  if (!user) {
    return (
      <div className="w-[1440px] min-h-screen bg-[#242a32] mx-auto px-20 py-32">
        <div className="text-center">
          <h2 className="text-white text-2xl mb-4">로그인이 필요합니다</h2>
          <p className="text-[#4e5968]">
            마이페이지를 이용하려면 로그인해주세요
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="w-[1440px] min-h-screen bg-[#242a32] mx-auto px-20 py-32">
        <div className="text-center text-white">로딩 중...</div>
      </div>
    );
  }

  return (
    <div className="w-[1440px] min-h-screen bg-[#242a32] mx-auto px-20 py-32">
      <div className="mb-8">
        <h1 className="text-white text-3xl mb-2">마이페이지</h1>
        <p className="text-[#4e5968]">{user.email}</p>
      </div>

      <Tabs defaultValue="reviews" className="w-full">
        <TabsList className="bg-[#4e5968]/20 border border-[#4e5968]/40 mb-8">
          <TabsTrigger
            value="reviews"
            className="data-[state=active]:bg-[#4e5968]/50 data-[state=active]:text-white"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            내 리뷰 ({reviews.length})
          </TabsTrigger>
          <TabsTrigger
            value="watchlist"
            className="data-[state=active]:bg-[#4e5968]/50 data-[state=active]:text-white"
          >
            <Heart className="w-4 h-4 mr-2" />
            찜한 영화 ({watchlist.length})
          </TabsTrigger>
        </TabsList>

        {/* 리뷰 목록 */}
        <TabsContent value="reviews" className="space-y-4">
          {reviews.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-[#4e5968]">아직 작성한 리뷰가 없습니다</p>
            </div>
          ) : (
            reviews.map((review) => (
              <div
                key={review.id}
                className="bg-[#4e5968]/20 border border-[#4e5968]/30 rounded-lg p-6 hover:border-white/20 transition-all"
              >
                <div className="flex gap-4">
                  <div className="w-24 h-36 flex-shrink-0 rounded-lg overflow-hidden border border-[#4e5968]/30">
                    <ImageWithFallback
                      src={review.movies.posterUrl}
                      alt={review.movies.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-white text-lg mb-1">
                          {review.movies.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 text-[#fbb343]">
                            <Star className="w-4 h-4 fill-current" />
                            <span>{review.rating}/10</span>
                          </div>
                          <span className="text-[#4e5968] text-sm">
                            {new Date(review.created_at).toLocaleDateString(
                              "ko-KR"
                            )}
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteReview(review.id)}
                        className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    {review.comment && (
                      <p className="text-[#4e5968] text-sm leading-relaxed">
                        {review.comment}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </TabsContent>

        {/* ��한 영화 목록 */}
        <TabsContent value="watchlist">
          {watchlist.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-[#4e5968]">찜한 영화가 없습니다</p>
            </div>
          ) : (
            <div className="grid grid-cols-5 gap-5">
              {watchlist.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-[#1a1f26] rounded-lg overflow-hidden border border-[#4e5968]/30 hover:border-[#FBB343]/50 transition-all"
                >
                  <div className="aspect-[2/3] relative overflow-hidden">
                    <ImageWithFallback
                      src={item.movies.posterUrl}
                      alt={item.movies.title}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => removeFromWatchlist(item.id)}
                      className="absolute top-2 right-2 p-2 bg-black/70 backdrop-blur-sm rounded-full hover:bg-red-500 transition-all opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  <div className="p-3">
                    <h3 className="text-white text-sm mb-1 line-clamp-1">
                      {item.movies.title}
                    </h3>
                    <div className="flex items-center gap-1 text-[#FBB343] text-sm">
                      <Star className="w-3 h-3 fill-current" />
                      <span>{item.movies.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
