import { useState } from "react";
import { Header } from "./Header";
import { ScrollToTop } from "./ScrollToTop";
import { Toaster } from "./ui/sonner";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { MessageSquare, ThumbsUp, Eye, Edit3 } from "lucide-react";

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  createdAt: string;
  views: number;
  likes: number;
  comments: number;
}

const dummyPosts: Post[] = [
  {
    id: "1",
    title: "듄2 IMAX로 보고 왔는데 진짜 압도적이네요",
    content: "영상미가 장난 아닙니다. 사운드도 엄청나고... IMAX 추천합니다! 특히 사막 씬에서는 소름 돋았어요. 1편 안 본 분들도 충분히 이해 가능할 것 같아요.",
    author: "영화광123",
    category: "자유게시판",
    createdAt: "2024-12-01",
    views: 1234,
    likes: 89,
    comments: 23,
  },
  {
    id: "2",
    title: "올해 본 영화 중 최고는?",
    content: "저는 단연 오펜하이머였습니다. 여러분은 어떤 영화가 가장 기억에 남으시나요? 추천도 환영합니다!",
    author: "시네마러버",
    category: "영화토론",
    createdAt: "2024-11-30",
    views: 856,
    likes: 45,
    comments: 67,
  },
  {
    id: "3",
    title: "CGV 할인 꿀팁 공유합니다",
    content: "수요일 문화의 날 + 카드 할인 중복 적용되는 거 아시나요? 최대 8천원까지 할인 가능해요. 자세한 방법 본문에 정리했습니다.",
    author: "절약왕",
    category: "자유게시판",
    createdAt: "2024-11-29",
    views: 2341,
    likes: 156,
    comments: 34,
  },
  {
    id: "4",
    title: "SF 영화 입문자에게 추천하는 작품들",
    content: "친구가 SF 영화 처음 본다는데 뭐 추천해줄까요? 너무 어렵지 않으면서 재밌는 작품 찾고 있어요. 인터스텔라는 너무 무거울까요?",
    author: "추천좀",
    category: "추천",
    createdAt: "2024-11-28",
    views: 543,
    likes: 28,
    comments: 41,
  },
  {
    id: "5",
    title: "영화관 좌석 추천 부탁드려요",
    content: "롯데시네마 월드타워점에서 보려고 하는데 몇 열이 제일 좋을까요? 처음 가봐서 잘 모르겠네요. 중앙이 무조건 좋은 건 아니라던데...",
    author: "초보관람객",
    category: "질문",
    createdAt: "2024-11-27",
    views: 678,
    likes: 12,
    comments: 19,
  },
  {
    id: "6",
    title: "크리스토퍼 놀란 감독 작품 순위 매겨보기",
    content: "1. 인터스텔라 2. 다크나이트 3. 인셉션 4. 오펜하이머 5. 덩케르크 ... 이렇게 뽑았는데 이견 있으신 분?",
    author: "놀란팬",
    category: "영화토론",
    createdAt: "2024-11-26",
    views: 1456,
    likes: 73,
    comments: 89,
  },
  {
    id: "7",
    title: "CGV vs 롯데 vs 메가박스 어디가 제일 좋나요?",
    content: "각 체인별 장단점 비교해주실 분 계신가요? 집 근처에 세 곳 다 있어서 어디 다녀야 할지 고민입니다.",
    author: "선택장애",
    category: "질문",
    createdAt: "2024-11-25",
    views: 923,
    likes: 34,
    comments: 52,
  },
  {
    id: "8",
    title: "겨울에 보기 좋은 따뜻한 영화 추천",
    content: "날씨가 추워지니까 마음 따뜻해지는 영화 보고 싶네요. 러브액츄얼리 같은 느낌? 크리스마스 시즌에 딱 맞는 영화들 추천해주세요!",
    author: "겨울사랑",
    category: "추천",
    createdAt: "2024-11-24",
    views: 1122,
    likes: 67,
    comments: 45,
  },
];

export function CommunityPage() {
  const [category, setCategory] = useState("전체");

  const filteredPosts = dummyPosts.filter(
    (p) => category === "전체" || p.category === category
  );

  return (
    <div className="max-w-[1440px] w-full min-h-screen bg-[#242a32] mx-auto">
      <Toaster position="top-center" />
      <ScrollToTop />
      <Header />

      <div className="px-20 py-16">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-white mb-2">커뮤니티</h1>
            <p className="text-[#4e5968]">
              영화에 대한 이야기를 자유롭게 나눠보세요
            </p>
          </div>
          <Button className="bg-[#FBB343] hover:bg-[#fbc05e] text-[#242A32]">
            <Edit3 className="w-4 h-4 mr-2" />
            글쓰기
          </Button>
        </div>

        {/* Category Tabs */}
        <Tabs value={category} onValueChange={setCategory}>
          <TabsList className="bg-[#4e5968]/20 border border-[#4e5968]/40 mb-8">
            <TabsTrigger
              value="전체"
              className="text-[#4e5968] data-[state=active]:bg-[#4e5968]/50 data-[state=active]:text-white"
            >
              전체
            </TabsTrigger>
            <TabsTrigger
              value="자유게시판"
              className="text-[#4e5968] data-[state=active]:bg-[#4e5968]/50 data-[state=active]:text-white"
            >
              자유게시판
            </TabsTrigger>
            <TabsTrigger
              value="영화토론"
              className="text-[#4e5968] data-[state=active]:bg-[#4e5968]/50 data-[state=active]:text-white"
            >
              영화토론
            </TabsTrigger>
            <TabsTrigger
              value="추천"
              className="text-[#4e5968] data-[state=active]:bg-[#4e5968]/50 data-[state=active]:text-white"
            >
              추천
            </TabsTrigger>
            <TabsTrigger
              value="질문"
              className="text-[#4e5968] data-[state=active]:bg-[#4e5968]/50 data-[state=active]:text-white"
            >
              질문
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Posts List */}
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-[#4e5968]/10 border border-[#4e5968]/30 rounded-xl p-6 hover:border-white/20 transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs px-2 py-1 rounded bg-[#4e5968]/30 text-[#4e5968]">
                      {post.category}
                    </span>
                    <h3 className="text-white group-hover:text-[#FBB343] transition-colors">
                      {post.title}
                    </h3>
                  </div>
                  <p className="text-[#4e5968] text-sm line-clamp-2 mb-3">
                    {post.content}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[#4e5968]">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.createdAt}</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 text-sm text-[#4e5968] pt-3 border-t border-[#4e5968]/20">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{post.views.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#4e5968]">게시글이 없습니다</p>
          </div>
        )}
      </div>
    </div>
  );
}