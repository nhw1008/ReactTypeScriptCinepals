import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { MovieSlider } from "./components/MovieSlider";
import { CinepalsLogo } from "./components/CinepalsLogo";
import { ScrollToTop } from "./components/ScrollToTop";
import { MovieCard, Movie } from "./components/MovieCard";
import { EventCard, Event } from "./components/EventCard";
import { ReviewDialog } from "./components/ReviewDialog";
import { EventsPage } from "./components/EventsPage";
import { MoviesPage } from "./components/MoviesPage";
import { CommunityPage } from "./components/CommunityPage";
import { ListsPage } from "./components/ListsPage";
import { ListDetailPage } from "./components/ListDetailPage";
import { MovieDetailPage } from "./components/MovieDetailPage";
import { MovieCardSkeleton } from "./components/MovieCardSkeleton";
import { EventCardSkeleton } from "./components/EventCardSkeleton";
import { FadeIn } from "./components/FadeIn";
import { StaggerChildren } from "./components/StaggerChildren";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Toaster } from "./components/ui/sonner";
import { supabase } from "./lib/supabase";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "./components/ui/tabs";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Film,
  Clock,
  MapPin,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./components/ui/dialog";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "events" | "movies" | "community" | "lists" | "movie-detail">("home");
  const [listId, setListId] = useState<string>("");
  const [movieId, setMovieId] = useState<string>("");
  const [selectedTab, setSelectedTab] = useState<
    "recent" | "upcoming"
  >("recent");
  const [selectedMovie, setSelectedMovie] =
    useState<Movie | null>(null);
  const [bookingDialogOpen, setBookingDialogOpen] =
    useState(false);
  const [reviewDialogOpen, setReviewDialogOpen] = useState(false);
  const [reviewMovie, setReviewMovie] = useState<Movie | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  // 간단한 라우팅 처리
  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname;
      
      // /movies/:id 패턴 체크
      const movieDetailMatch = path.match(/^\/movies\/([^/]+)$/);
      if (movieDetailMatch) {
        setCurrentPage("movie-detail");
        setMovieId(movieDetailMatch[1]);
        return;
      }
      
      // /lists/:id 패턴 체크
      const listDetailMatch = path.match(/^\/lists\/([^/]+)$/);
      if (listDetailMatch) {
        setCurrentPage("lists");
        setListId(listDetailMatch[1]);
        return;
      }
      
      if (path === "/events") {
        setCurrentPage("events");
        setListId("");
        setMovieId("");
      } else if (path === "/movies") {
        setCurrentPage("movies");
        setListId("");
        setMovieId("");
      } else if (path === "/community") {
        setCurrentPage("community");
        setListId("");
        setMovieId("");
      } else if (path === "/lists") {
        setCurrentPage("lists");
        setListId("");
        setMovieId("");
      } else {
        setCurrentPage("home");
        setListId("");
        setMovieId("");
      }
    };

    handleRouteChange();
    window.addEventListener("popstate", handleRouteChange);
    
    // 링크 클릭 처리
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (link && link.getAttribute("href")?.startsWith("/")) {
        e.preventDefault();
        const href = link.getAttribute("href");
        window.history.pushState({}, "", href);
        handleRouteChange();
        window.scrollTo(0, 0);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  // Supabase에서 데이터 로드
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    
    // 영화 데이터 로드
    const { data: moviesData } = await supabase
      .from("movies")
      .select("*")
      .order("created_at", { ascending: false });

    if (moviesData) {
      setMovies(
        moviesData.map((m) => ({
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

    // 이벤트 데이터 로드
    const { data: eventsData } = await supabase
      .from("events")
      .select("*")
      .order("created_at", { ascending: false });

    if (eventsData) {
      setEvents(
        eventsData.map((e) => ({
          id: e.id,
          title: e.title,
          description: e.description,
          imageUrl: e.image_url,
          startDate: e.start_date,
          endDate: e.end_date,
          location: e.location,
          discount: e.discount,
          tag: e.tag,
        }))
      );
    }

    setLoading(false);
  };

  const handleBooking = (movie: Movie) => {
    setSelectedMovie(movie);
    setBookingDialogOpen(true);
  };

  const handleReview = (movie: Movie) => {
    setReviewMovie(movie);
    setReviewDialogOpen(true);
  };

  // 이벤트 페이지 표시
  if (currentPage === "events") {
    return <EventsPage />;
  }

  // 영화 페이지 표시
  if (currentPage === "movies") {
    return <MoviesPage />;
  }

  // 커뮤니티 페이지 표시
  if (currentPage === "community") {
    return <CommunityPage />;
  }

  // 리스트 페이지 표시
  if (currentPage === "lists") {
    return listId ? <ListDetailPage listId={listId} /> : <ListsPage />;
  }

  // 영화 상세 페이지 표시
  if (currentPage === "movie-detail") {
    return <MovieDetailPage movieId={movieId} />;
  }

  return (
    <div className="max-w-[1440px] w-full min-h-screen bg-[#242a32] mx-auto">
      {/* Toast 알림 */}
      <Toaster position="top-center" />
      
      {/* 로고 옵션을 보려면 아래 주석을 해제하세요 */}
      {/* <LogoShowcase /> */}

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Header */}
      <Header />

      {/* Featured Movie Slider */}
      <MovieSlider />

      <div className="w-full">
        {/* Main Content */}
        <div className="px-20 py-16">
        {/* Now Showing Movies Section */}
        <section className="mb-24" id="movies">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-white mb-1">
                상영 중인 영화
              </h2>
              <p className="text-[#4e5968] text-sm">
                지금 극장에서 만나보세요
              </p>
            </div>
            <Tabs
              value={selectedTab}
              onValueChange={(v) =>
                setSelectedTab(v as "recent" | "upcoming")
              }
            >
              <TabsList className="bg-[#4e5968]/20 border border-[#4e5968]/40">
                <TabsTrigger
                  value="recent"
                  className="text-[#4e5968] data-[state=active]:bg-[#4e5968]/50 data-[state=active]:text-white"
                >
                  최근 개봉
                </TabsTrigger>
                <TabsTrigger
                  value="upcoming"
                  className="text-[#4e5968] data-[state=active]:bg-[#4e5968]/50 data-[state=active]:text-white"
                >
                  개봉 예정
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Movie Carousel - with buttons in margin */}
          <div className="relative -mx-20">
            <div className="px-20">
              {loading ? (
                <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
                  {[...Array(6)].map((_, i) => (
                    <MovieCardSkeleton key={i} />
                  ))}
                </div>
              ) : (
                <div
                  className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
                  id="movie-scroll"
                >
                  {movies.map((movie) => (
                    <div
                      key={movie.id}
                      className="flex-shrink-0 w-[220px]"
                    >
                      <MovieCard
                        movie={movie}
                        onBooking={handleBooking}
                        onReview={handleReview}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Scroll Buttons - positioned in margin area */}
            <button
              onClick={() => {
                const container =
                  document.getElementById("movie-scroll");
                if (container)
                  container.scrollBy({
                    left: -1200,
                    behavior: "smooth",
                  });
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#242a32] hover:bg-[#4e5968] text-white p-2.5 rounded-full transition-all border border-[#4e5968]/50 shadow-xl z-10 active:scale-90"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                const container =
                  document.getElementById("movie-scroll");
                if (container)
                  container.scrollBy({
                    left: 1200,
                    behavior: "smooth",
                  });
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#242a32] hover:bg-[#4e5968] text-white p-2.5 rounded-full transition-all border border-[#4e5968]/50 shadow-xl z-10 active:scale-90"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="text-center mt-6">
            <Button
              variant="outline"
              className="border-[#4e5968]/40 !text-[#4e5968] hover:!bg-[#4e5968]/30 hover:!text-white hover:border-[#4e5968]/60 !bg-transparent active:scale-95 transition-transform"
            >
              더보기
            </Button>
          </div>
        </section>

        {/* Quick Menu Section */}
        <FadeIn>
        <section className="mb-24">
          <StaggerChildren staggerDelay={80} className="grid grid-cols-4 gap-6">
            <div className="relative bg-gradient-to-br from-[#4e5968]/30 to-[#4e5968]/10 border border-[#4e5968]/40 rounded-xl p-6 text-center hover:border-white/30 transition-all cursor-pointer group overflow-hidden active:scale-95">
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="bg-white/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Film className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white mb-1">빠른 예매</h3>
                <p className="text-[#4e5968] text-xs">
                  바로 예매하기
                </p>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-[#4e5968]/30 to-[#4e5968]/10 border border-[#4e5968]/40 rounded-xl p-6 text-center hover:border-white/30 transition-all cursor-pointer group overflow-hidden active:scale-95">
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="bg-white/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-white mb-1">상영시간표</h3>
                <p className="text-[#4e5968] text-xs">
                  시간 확인하기
                </p>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-[#4e5968]/30 to-[#4e5968]/10 border border-[#4e5968]/40 rounded-xl p-6 text-center hover:border-white/30 transition-all cursor-pointer group overflow-hidden active:scale-95">
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="bg-white/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-white mb-1">극장 찾기</h3>
                <p className="text-[#4e5968] text-xs">
                  가까운 극장
                </p>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-[#4e5968]/30 to-[#4e5968]/10 border border-[#4e5968]/40 rounded-xl p-6 text-center hover:border-white/30 transition-all cursor-pointer group overflow-hidden active:scale-95">
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="bg-white/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-white mb-1">멤버십</h3>
                <p className="text-[#4e5968] text-xs">
                  혜택 보기
                </p>
              </div>
            </div>
          </StaggerChildren>
        </section>
        </FadeIn>

        {/* Events Section */}
        <section id="events">
          <FadeIn>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-white mb-1">
                진행 중인 이벤트
              </h2>
              <p className="text-[#4e5968] text-sm">
                특별한 혜택을 놓치지 마세요
              </p>
            </div>
            <Button
              variant="outline"
              className="border-[#4e5968]/40 !text-[#4e5968] hover:!bg-[#4e5968]/30 hover:!text-white hover:border-[#4e5968]/60 !bg-transparent"
            >
              전체보기
            </Button>
          </div>
          </FadeIn>

          {loading ? (
            <div className="grid grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <EventCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <StaggerChildren staggerDelay={100} className="grid grid-cols-3 gap-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-[#4e5968]/20 border border-[#4e5968]/30 rounded-xl overflow-hidden hover:border-white/20 transition-all group cursor-pointer active:scale-[0.98]"
                >
                  <div className="aspect-video overflow-hidden bg-[#242a32]">
                    <ImageWithFallback
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-white line-clamp-2 flex-1">
                        {event.title}
                      </h3>
                      {event.discount && (
                        <Badge className="bg-[#fbb343] text-[#242a32] hover:bg-[#fbb343] ml-2 flex-shrink-0">
                          {event.discount}
                        </Badge>
                      )}
                    </div>
                    <p className="text-[#4e5968] text-sm mb-3 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#4e5968]">
                        {event.startDate}
                      </span>
                      <span className="text-[#4e5968]">~</span>
                      <span className="text-[#4e5968]">
                        {event.endDate}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </StaggerChildren>
          )}
        </section>
        </div>
      </div>

      {/* Booking Dialog - Enhanced */}
      <Dialog
        open={bookingDialogOpen}
        onOpenChange={setBookingDialogOpen}
      >
        <DialogContent className="bg-[#242a32] border-[#4e5968] text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl">
              {selectedMovie?.title}
            </DialogTitle>
            <DialogDescription className="text-[#4e5968]">
              예매 정보를 확인하세요
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="grid grid-cols-5 gap-4">
              {/* Movie Poster */}
              <div className="col-span-2">
                <div className="aspect-[2/3] rounded-lg overflow-hidden border border-[#4e5968]/30">
                  <ImageWithFallback
                    src={selectedMovie?.posterUrl || ""}
                    alt={selectedMovie?.title || ""}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Movie Info */}
              <div className="col-span-3 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-white/10 text-white border border-white/20">
                      {selectedMovie?.ageRating}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[#fbb343] text-[#fbb343]" />
                      <span className="text-[#fbb343]">
                        {selectedMovie?.rating}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-[#4e5968]">
                      <Film className="w-4 h-4" />
                      <span>{selectedMovie?.genre}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#4e5968]">
                      <Clock className="w-4 h-4" />
                      <span>{selectedMovie?.runtime}분</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#4e5968]">
                      <MapPin className="w-4 h-4" />
                      <span>
                        개봉일: {selectedMovie?.releaseDate}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[#4e5968] leading-relaxed">
                    {selectedMovie?.description}
                  </p>
                </div>

                {/* Theater Selection */}
                <div className="border-t border-[#4e5968]/30 pt-4">
                  <h4 className="text-sm mb-3">극장 선택</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="p-3 bg-[#4e5968]/20 hover:bg-[#4e5968]/30 rounded-lg text-sm text-left border border-[#4e5968]/30 hover:border-white/30 transition-all">
                      <div className="text-white">CGV 강남</div>
                      <div className="text-[#4e5968] text-xs mt-1">
                        10개 상영관
                      </div>
                    </button>
                    <button className="p-3 bg-[#4e5968]/20 hover:bg-[#4e5968]/30 rounded-lg text-sm text-left border border-[#4e5968]/30 hover:border-white/30 transition-all">
                      <div className="text-white">
                        롯데시네마 홍대
                      </div>
                      <div className="text-[#4e5968] text-xs mt-1">
                        8개 상영관
                      </div>
                    </button>
                    <button className="p-3 bg-[#4e5968]/20 hover:bg-[#4e5968]/30 rounded-lg text-sm text-left border border-[#4e5968]/30 hover:border-white/30 transition-all">
                      <div className="text-white">
                        메가박스 코엑스
                      </div>
                      <div className="text-[#4e5968] text-xs mt-1">
                        12개 상영관
                      </div>
                    </button>
                    <button className="p-3 bg-[#4e5968]/20 hover:bg-[#4e5968]/30 rounded-lg text-sm text-left border border-[#4e5968]/30 hover:border-white/30 transition-all">
                      <div className="text-white">CGV 용산</div>
                      <div className="text-[#4e5968] text-xs mt-1">
                        15개 상영관
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Button className="w-full bg-[#fbb343] text-[#242a32] hover:bg-[#fbb343]/90 h-12">
              상영 시간 선택하기
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Review Dialog */}
      <ReviewDialog
        open={reviewDialogOpen}
        onOpenChange={setReviewDialogOpen}
        movieId={reviewMovie?.id || ""}
        movieTitle={reviewMovie?.title || ""}
        onReviewSubmitted={loadData}
      />

      <div className="w-full">
        {/* Footer */}
        <footer className="border-t border-[#4e5968]/30 mt-32">
          <div className="px-20 py-16">
          <div className="grid grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="mb-4">
                <CinepalsLogo className="h-8 w-auto opacity-80" />
              </div>
              <p className="text-[#4e5968] text-sm mb-4">
                최고의 영화 험을 제공하는 Cinepals
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-[#4e5968] hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-[#4e5968] hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-[#4e5968] hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-[#4e5968] hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
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
                    극장 찾기
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
                <li>
                  <a
                    href="#"
                    className="text-[#4e5968] hover:text-white transition-colors"
                  >
                    멤버십
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
                <li>
                  <a
                    href="#"
                    className="text-[#4e5968] hover:text-white transition-colors"
                  >
                    1:1 문의
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#4e5968] hover:text-white transition-colors"
                  >
                    분실물 센터
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#4e5968] hover:text-white transition-colors"
                  >
                    단체 관람 문의
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Legal */}
            <div>
              <h4 className="text-white mb-4">회사 정보</h4>
              <ul className="space-y-2 text-sm text-[#4e5968]">
                <li>고객센터: 1544-0000</li>
                <li>이메일: support@cinepals.com</li>
                <li>운영시간: 09:00 - 22:00</li>
              </ul>
              <div className="mt-4 space-y-2">
                <a
                  href="#"
                  className="block text-sm text-[#4e5968] hover:text-white transition-colors"
                >
                  이용약관
                </a>
                <a
                  href="#"
                  className="block text-sm text-[#4e5968] hover:text-white transition-colors"
                >
                  개인정보처리방침
                </a>
                <a
                  href="#"
                  className="block text-sm text-[#4e5968] hover:text-white transition-colors"
                >
                  법적고지
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#4e5968]/20 pt-6">
            <div className="flex justify-between items-start gap-4 text-sm text-[#4e5968]">
              <p className="text-xs leading-relaxed">
                (주)시네팔스 | 대표이사: 홍길동 |
                사업자등록번호: 123-45-67890
                <br />
                서울특별시 강남구 테헤란로 123 |
                통신판매업신고번호: 2024-서울강남-0000
              </p>
              <p className="text-right text-xs">
                Copyright © 2025 Cinepals Inc.
                <br />
                ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// 로고 옵션 페이지를 보려면 아래 주석을 해제하고 위의 App을 주석 처리하세요
// export default LogoShowcase;