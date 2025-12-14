import { useState } from "react";
import { Header } from "./Header";
import { Badge } from "./ui/badge";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CinepalsLogo } from "./CinepalsLogo";
import { ScrollToTop } from "./ScrollToTop";

interface EventItem {
  id: string;
  title: string;
  dateRange: string;
  imageUrl: string;
  badge?: string;
}

const CGV_EVENTS: EventItem[] = [
  {
    id: "1",
    title: "[극장판 주술회전: 회귀유곡편] 무대인사 후기 응모 이벤트",
    dateRange: "2025.01.15 ~ 2025.02.15",
    imageUrl: "https://images.unsplash.com/photo-1762417420551-2fec32ed3595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHByZW1pZXJlJTIwZXZlbnR8ZW58MXx8fHwxNzY0NjA0MzUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "무대인사",
  },
  {
    id: "2",
    title: "[웨폰] 스페셜 무대",
    dateRange: "2025.02.01 ~ 2025.02.28",
    imageUrl: "https://images.unsplash.com/photo-1751823886813-0cfc86cb9478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBzcGVjaWFsJTIwc2NyZWVuaW5nfGVufDF8fHx8MTc2NDYwNDM1MXww&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "스페셜",
  },
  {
    id: "3",
    title: "[모조] 2차 시사회+보드 무료증정",
    dateRange: "2025.01.20 ~ 2025.02.10",
    imageUrl: "https://images.unsplash.com/photo-1761819952025-73c0398c2ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHRoZWF0ZXIlMjBwcm9tb3Rpb258ZW58MXx8fHwxNzY0NjA0MzUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "굿즈증정",
  },
  {
    id: "4",
    title: "[애완 볼프 3] 만원관람권",
    dateRange: "2025.01.10 ~ 2025.02.28",
    imageUrl: "https://images.unsplash.com/photo-1657556214664-d5d46b8bf06d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZmVzdGl2YWwlMjBldmVudHxlbnwxfHx8fDE3NjQ2MDQzNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "5",
    title: "[극장판 체이스미] 렌딩 이벤트",
    dateRange: "2025.01.25 ~ 2025.03.31",
    imageUrl: "https://images.unsplash.com/photo-1572177191856-3cde618dee1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMG5pZ2h0JTIwZXZlbnR8ZW58MXx8fHwxNzY0NjA0MzUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "6",
    title: "[조지카] 계콧 무대인사 투표",
    dateRange: "2025.01.05 ~ 2025.01.31",
    imageUrl: "https://images.unsplash.com/photo-1751823886813-0cfc86cb9478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBkaXNjb3VudCUyMGV2ZW50fGVufDF8fHx8MTc2NDYwNDM1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "투표",
  },
];

const LOTTE_EVENTS: EventItem[] = [
  {
    id: "1",
    title: "[베테랑2] 천만 돌파 기념 이벤트",
    dateRange: "2025.01.01 ~ 2025.02.28",
    imageUrl: "https://images.unsplash.com/photo-1762417420551-2fec32ed3595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHByZW1pZXJlJTIwZXZlbnR8ZW58MXx8fHwxNzY0NjA0MzUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "천만돌파",
  },
  {
    id: "2",
    title: "롯데시네마 멤버십 할인 이벤트",
    dateRange: "2025.01.15 ~ 2025.03.15",
    imageUrl: "https://images.unsplash.com/photo-1657556214664-d5d46b8bf06d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZmVzdGl2YWwlMjBldmVudHxlbnwxfHx8fDE3NjQ2MDQzNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "할인",
  },
  {
    id: "3",
    title: "[노량: 죽음의 바다] 특별 상영회",
    dateRange: "2025.02.01 ~ 2025.02.20",
    imageUrl: "https://images.unsplash.com/photo-1761819952025-73c0398c2ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHRoZWF0ZXIlMjBwcm9tb3Rpb258ZW58MXx8fHwxNzY0NjA0MzUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "4",
    title: "가족과 함께 영화보고 조식권 당첨",
    dateRange: "2025.02.01 ~ 2025.02.21",
    imageUrl: "https://images.unsplash.com/photo-1572177191856-3cde618dee1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMG5pZ2h0JTIwZXZlbnR8ZW58MXx8fHwxNzY0NjA0MzUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "경품",
  },
  {
    id: "5",
    title: "설 연휴 팝콘 콤보 특가",
    dateRange: "2025.01.28 ~ 2025.02.02",
    imageUrl: "https://images.unsplash.com/photo-1751823886813-0cfc86cb9478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBkaXNjb3VudCUyMGV2ZW50fGVufDF8fHx8MTc2NDYwNDM1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "할인",
  },
  {
    id: "6",
    title: "[범죄도시4] 사전예매 이벤트",
    dateRange: "2025.01.10 ~ 2025.01.31",
    imageUrl: "https://images.unsplash.com/photo-1762417420551-2fec32ed3595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHByZW1pZXJlJTIwZXZlbnR8ZW58MXx8fHwxNzY0NjA0MzUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const MEGABOX_EVENTS: EventItem[] = [
  {
    id: "1",
    title: "<헤레티> 특별 증정 이벤트",
    dateRange: "2025.01.04 ~ 2025.01.10",
    imageUrl: "https://images.unsplash.com/photo-1761819952025-73c0398c2ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHRoZWF0ZXIlMjBwcm9tb3Rpb258ZW58MXx8fHwxNzY0NjA0MzUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "굿즈증정",
  },
  {
    id: "2",
    title: "메가박스 멤버십 신규 가입 이벤트",
    dateRange: "2025.01.01 ~ 2025.12.31",
    imageUrl: "https://images.unsplash.com/photo-1657556214664-d5d46b8bf06d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZmVzdGl2YWwlMjBldmVudHxlbnwxfHx8fDE3NjQ2MDQzNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "3",
    title: "[파묘] 리마스터 특별 상영",
    dateRange: "2025.02.15 ~ 2025.03.15",
    imageUrl: "https://images.unsplash.com/photo-1762417420551-2fec32ed3595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHByZW1pZXJlJTIwZXZlbnR8ZW58MXx8fHwxNzY0NjA0MzUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "리마스터",
  },
  {
    id: "4",
    title: "4DX 관람권 특가 이벤트",
    dateRange: "2025.01.20 ~ 2025.02.28",
    imageUrl: "https://images.unsplash.com/photo-1751823886813-0cfc86cb9478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBkaXNjb3VudCUyMGV2ZW50fGVufDF8fHx8MTc2NDYwNDM1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "특가",
  },
  {
    id: "5",
    title: "IMAX 체험 이벤트",
    dateRange: "2025.02.01 ~ 2025.02.28",
    imageUrl: "https://images.unsplash.com/photo-1572177191856-3cde618dee1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMG5pZ2h0JTIwZXZlbnR8ZW58MXx8fHwxNzY0NjA0MzUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "6",
    title: "[서울의 봄] 앵콜 상영",
    dateRange: "2025.01.15 ~ 2025.02.15",
    imageUrl: "https://images.unsplash.com/photo-1761819952025-73c0398c2ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHRoZWF0ZXIlMjBwcm9tb3Rpb258ZW58MXx8fHwxNzY0NjA0MzUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "앵콜상영",
  },
];

export function EventsPage() {
  const [selectedTheater, setSelectedTheater] = useState<"cgv" | "lotte" | "megabox">("cgv");

  const currentEvents = 
    selectedTheater === "cgv" ? CGV_EVENTS :
    selectedTheater === "lotte" ? LOTTE_EVENTS :
    MEGABOX_EVENTS;

  return (
    <div className="max-w-[1440px] w-full min-h-screen bg-[#242a32] mx-auto">
      <ScrollToTop />
      <Header />

      {/* Event Hero Section */}
      <div className="px-20 pt-16 pb-8">
        <h1 className="text-white text-5xl mb-2">EVENT</h1>
      </div>

      {/* Theater Tabs */}
      <div className="px-20 pb-12">
        <Tabs
          value={selectedTheater}
          onValueChange={(v) => setSelectedTheater(v as "cgv" | "lotte" | "megabox")}
        >
          <TabsList className="bg-transparent border-b border-[#4e5968]/30 rounded-none w-full justify-start h-auto p-0 gap-8">
            <TabsTrigger
              value="cgv"
              className="bg-transparent data-[state=active]:bg-transparent border-b-2 border-transparent data-[state=active]:border-white rounded-none pb-3 text-[#4e5968] data-[state=active]:text-white data-[state=active]:shadow-none"
            >
              CGV
            </TabsTrigger>
            <TabsTrigger
              value="lotte"
              className="bg-transparent data-[state=active]:bg-transparent border-b-2 border-transparent data-[state=active]:border-white rounded-none pb-3 text-[#4e5968] data-[state=active]:text-white data-[state=active]:shadow-none"
            >
              롯데시네마
            </TabsTrigger>
            <TabsTrigger
              value="megabox"
              className="bg-transparent data-[state=active]:bg-transparent border-b-2 border-transparent data-[state=active]:border-white rounded-none pb-3 text-[#4e5968] data-[state=active]:text-white data-[state=active]:shadow-none"
            >
              메가박스
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Events Grid */}
      <div className="px-20 pb-24">
        <div className="grid grid-cols-3 gap-6">
          {currentEvents.map((event) => (
            <div
              key={event.id}
              className="bg-[#4e5968]/20 border border-[#4e5968]/30 rounded-xl overflow-hidden hover:border-white/20 transition-all group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden bg-[#242a32] relative">
                <ImageWithFallback
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {event.badge && (
                  <Badge className="absolute top-3 left-3 bg-[#fbb343] text-[#242a32] hover:bg-[#fbb343]">
                    {event.badge}
                  </Badge>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-white mb-3 line-clamp-2 min-h-[3rem]">
                  {event.title}
                </h3>
                <p className="text-[#4e5968] text-sm">
                  {event.dateRange}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#4e5968]/30 mt-16">
        <div className="px-20 py-16">
          <div className="grid grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="mb-4">
                <CinepalsLogo className="h-8 w-auto opacity-80" />
              </div>
              <p className="text-[#4e5968] text-sm mb-4">
                최고의 영화 경험을 제공하는 Cinepals
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white mb-4">서비스</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-[#4e5968] hover:text-white transition-colors"
                  >
                    영화 예매
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#4e5968] hover:text-white transition-colors"
                  >
                    상영 시간표
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#4e5968] hover:text-white transition-colors"
                  >
                    이벤트
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white mb-4">고객지원</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-[#4e5968] hover:text-white transition-colors"
                  >
                    공지사항
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#4e5968] hover:text-white transition-colors"
                  >
                    자주 묻는 질문
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#4e5968]/30 pt-8">
            <p className="text-[#4e5968] text-xs text-center">
              COPYRIGHT © 2025 Cinepals. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}