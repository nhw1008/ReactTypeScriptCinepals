import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SliderMovie {
  id: string;
  title: string;
  genre: string;
  rating: number;
  runtime: number;
  description: string;
  backgroundUrl: string;
}

const SLIDER_MOVIES: SliderMovie[] = [
  {
    id: "1",
    title: "대양으로의 모험",
    genre: "SF/액션",
    rating: 8.5,
    runtime: 148,
    description: "우주를 배경으로 한 스릴 넘치는 모험. 인류의 미래가 걸린 위대한 여정이 시작된다.",
    backgroundUrl: "https://images.unsplash.com/photo-1644772310791-deb96e24ee65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZmljdGlvbiUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzYyNjE4MTk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "2",
    title: "베를린에서의 겨울",
    genre: "로맨스/드라마",
    rating: 7.2,
    runtime: 120,
    description: "사랑과 이별, 그리고 재회의 이야기. 추운 겨울 베를린에서 펼쳐지는 감동적인 드라마.",
    backgroundUrl: "https://images.unsplash.com/photo-1708787788824-07d6d97b0111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMG1vdmllJTIwY291cGxlfGVufDF8fHx8MTc2MjY2MTMzMnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "3",
    title: "더 블레이드",
    genre: "액션/스릴러",
    rating: 8.5,
    runtime: 115,
    description: "복수를 위해 칼을 든 전사의 이야기. 피할 수 없는 운명과 마주한다.",
    backgroundUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZXxlbnwxfHx8fDE3NjI2MTgyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function MovieSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDER_MOVIES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDER_MOVIES.length) % SLIDER_MOVIES.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDER_MOVIES.length);
  };

  const currentMovie = SLIDER_MOVIES[currentIndex];

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={currentMovie.backgroundUrl}
          alt={currentMovie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#242a32] via-[#242a32]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#242a32] via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative h-full px-20">
        <div className="relative h-full flex items-center">
          <div className="max-w-xl pr-20">
            <h1 className="text-white text-5xl mb-4">{currentMovie.title}</h1>
            <p className="text-[#4e5968] mb-6">{currentMovie.genre}</p>
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              {currentMovie.description}
            </p>
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-[#FBB343]">
                <Star className="w-5 h-5 fill-current" />
                <span>{currentMovie.rating}</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Clock className="w-5 h-5" />
                <span>{currentMovie.runtime}분</span>
              </div>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => {
                  window.history.pushState({}, "", `/movies/${currentMovie.id}`);
                  window.dispatchEvent(new Event("popstate"));
                }}
                className="bg-[#4e5968]/50 hover:bg-[#4e5968] text-white px-8 py-3 rounded-lg transition-colors border border-[#4e5968]/30"
              >
                상세정보
              </button>
              <button className="border border-[#4e5968]/50 text-white hover:bg-[#4e5968]/30 px-8 py-3 rounded-lg transition-colors">
                예매하기
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - positioned in margin area */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#242a32]/90 hover:bg-[#4e5968] text-white p-3 rounded-full transition-all border border-[#4e5968]/50 shadow-lg z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#242a32]/90 hover:bg-[#4e5968] text-white p-3 rounded-full transition-all border border-[#4e5968]/50 shadow-lg z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDER_MOVIES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-[#4e5968]" : "w-1 bg-[#4e5968]/30 hover:bg-[#4e5968]/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}