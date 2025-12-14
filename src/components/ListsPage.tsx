import { useState, useEffect } from "react";
import { Header } from "./Header";
import { ScrollToTop } from "./ScrollToTop";
import { Toaster } from "./ui/sonner";
import { supabase } from "../lib/supabase";
import { Film } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface MovieList {
  id: string;
  title: string;
  description: string;
  cover_image: string;
  created_by: string;
  created_at: string;
  movie_count?: number;
}

export function ListsPage() {
  const [lists, setLists] = useState<MovieList[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLists();
  }, []);

  const loadLists = async () => {
    setLoading(true);
    
    // 리스트 데이터 로드
    const { data: listsData } = await supabase
      .from("lists")
      .select(`
        *,
        list_movies (count)
      `)
      .order("created_at", { ascending: false });

    if (listsData) {
      setLists(
        listsData.map((list) => ({
          id: list.id,
          title: list.title,
          description: list.description,
          cover_image: list.cover_image,
          created_by: list.created_by,
          created_at: list.created_at,
          movie_count: list.list_movies?.[0]?.count || 0,
        }))
      );
    }

    setLoading(false);
  };

  const handleListClick = (listId: string) => {
    window.history.pushState({}, "", `/lists/${listId}`);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="max-w-[1440px] w-full min-h-screen bg-[#242a32] mx-auto">
      <Toaster position="top-center" />
      <ScrollToTop />
      <Header />

      <div className="px-20 py-16">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-white mb-2">영화 리스트</h1>
          <p className="text-[#4e5968]">테마별로 엄선된 영화 컬렉션을 만나보세요</p>
        </div>

        {/* Lists Grid */}
        {loading ? (
          <div className="text-center text-[#4e5968] py-20">
            리스트를 불러오는 중...
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-6">
            {lists.map((list) => (
              <div
                key={list.id}
                onClick={() => handleListClick(list.id)}
                className="group cursor-pointer"
              >
                {/* Cover Image */}
                <div className="aspect-[3/2] rounded-lg overflow-hidden bg-[#4e5968]/20 relative mb-3">
                  <ImageWithFallback
                    src={list.cover_image}
                    alt={list.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Movie Count Badge */}
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1.5">
                    <Film className="w-3.5 h-3.5 text-white" />
                    <span className="text-white text-xs">{list.movie_count}</span>
                  </div>
                </div>

                {/* List Info */}
                <div>
                  <h3 className="text-white mb-1 group-hover:text-[#FBB343] transition-colors">
                    {list.title}
                  </h3>
                  <p className="text-[#4e5968] text-sm line-clamp-2">
                    {list.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && lists.length === 0 && (
          <div className="text-center py-20">
            <Film className="w-16 h-16 text-[#4e5968] mx-auto mb-4" />
            <p className="text-[#4e5968] mb-2">아직 생성된 리스트가 없습니다</p>
            <p className="text-[#4e5968] text-sm">첫 번째 영화 컬렉션을 만들어보세요!</p>
          </div>
        )}
      </div>
    </div>
  );
}