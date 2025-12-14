-- ============================================
-- Cinepals 데이터베이스 테이블 생성 SQL
-- Supabase SQL Editor에 복사해서 실행하세요
-- ============================================

-- 1. movies 테이블 (영화 정보)
CREATE TABLE IF NOT EXISTS movies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  genre TEXT,
  rating DECIMAL(3,1),
  runtime INTEGER,
  release_date TEXT,
  poster_url TEXT,
  description TEXT,
  age_rating TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. events 테이블 (이벤트 정보)
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  start_date TEXT,
  end_date TEXT,
  location TEXT,
  discount TEXT,
  tag TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. reviews 테이블 (리뷰)
CREATE TABLE IF NOT EXISTS reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  movie_id UUID REFERENCES movies(id) ON DELETE CASCADE NOT NULL,
  rating DECIMAL(3,1) NOT NULL CHECK (rating >= 0 AND rating <= 10),
  comment TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, movie_id)
);

-- 4. watchlist 테이블 (찜하기)
CREATE TABLE IF NOT EXISTS watchlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  movie_id UUID REFERENCES movies(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, movie_id)
);

-- ============================================
-- Row Level Security (RLS) 정책
-- ============================================

-- movies: 모두 읽기 가능
ALTER TABLE movies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Movies are viewable by everyone" ON movies
  FOR SELECT USING (true);

-- events: 모두 읽기 가능
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Events are viewable by everyone" ON events
  FOR SELECT USING (true);

-- reviews: 모두 읽기 가능, 본인만 작성/수정/삭제
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Reviews are viewable by everyone" ON reviews
  FOR SELECT USING (true);
CREATE POLICY "Users can insert their own reviews" ON reviews
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own reviews" ON reviews
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own reviews" ON reviews
  FOR DELETE USING (auth.uid() = user_id);

-- watchlist: 본인만 보기/추가/삭제
ALTER TABLE watchlist ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own watchlist" ON watchlist
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can add to their own watchlist" ON watchlist
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can remove from their own watchlist" ON watchlist
  FOR DELETE USING (auth.uid() = user_id);

-- ============================================
-- 더미 데이터 삽입
-- ============================================

-- 영화 데이터
INSERT INTO movies (title, genre, rating, runtime, release_date, poster_url, description, age_rating) VALUES
('대양으로의 모험', 'SF/액션', 8.5, 148, '2025.11.01', 'https://images.unsplash.com/photo-1644772310791-deb96e24ee65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZmljdGlvbiUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzYyNjE4MTk2fDA&ixlib=rb-4.1.0&q=80&w=1080', '우주를 배경으로 한 스릴 넘치는 모험. 인류의 미래가 걸린 위대한 여정이 시작된다.', '12세'),
('베를린에서의 겨울', '로맨스/드라마', 7.2, 120, '2025.10.28', 'https://images.unsplash.com/photo-1708787788824-07d6d97b0111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMG1vdmllJTIwY291cGxlfGVufDF8fHx8MTc2MjY2MTMzMnww&ixlib=rb-4.1.0&q=80&w=1080', '사랑과 이별, 그리고 재회의 이야기. 추운 겨울 베를린에서 펼쳐지는 감동적인 드라마.', '전체'),
('더 블레이드', '액션/스릴러', 8.5, 115, '2025.11.05', 'https://images.unsplash.com/photo-1645808651017-c5e3018553c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMHNjZW5lfGVufDF8fHx8MTc2MjY2MTA1NHww&ixlib=rb-4.1.0&q=80&w=1080', '어둠의 세력과 맞서 싸우는 전사의 이야기. 스펙터클한 액션 장면이 압권.', '15세'),
('너 더 무비', '드라마', 9.0, 105, '2025.11.03', 'https://images.unsplash.com/photo-1762356121454-877acbd554bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlciUyMGRyYW1hfGVufDF8fHx8MTc2MjYwMDA3N3ww&ixlib=rb-4.1.0&q=80&w=1080', 'AI 기술과 인간의 감정이 충돌하는 이야기. 감동과 스릴이 공존하는 작품.', '12세'),
('더 아이즈 오브 주드', '스릴러', 8.0, 135, '2025.10.30', 'https://images.unsplash.com/photo-1713065539822-d77a3562d7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBzY2FyeSUyMGRhcmt8ZW58MXx8fHwxNzYyNTg2MjM1fDA&ixlib=rb-4.1.0&q=80&w=1080', '미스터리와 공포가 결합된 심리 스릴러. 진실을 찾는 여정.', '15세');

-- 이벤트 데이터
INSERT INTO events (title, description, image_url, start_date, end_date, location, discount, tag) VALUES
('세계 최초 블록 버스터 오리지널 사운드 리버스', '1차 티켓 판매 - 오리지널 사운드트랙과 함께하는 특별 상영회', 'https://images.unsplash.com/photo-1724860125064-52f0615b8ed3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBldmVudCUyMGJhbm5lcnxlbnwxfHx8fDE3NjI2NzYzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080', '2025.08.19(화)', '2025.11.30(토)', '전국 CGV', '1차 판매', '특별 상영'),
('겨울에 가족과 함께 영화 보고 조식은 모스트 이벤트 당첨 이벤트', '가족과 함께 영화를 관람하고 경품 추첨에 응모하세요', 'https://images.unsplash.com/photo-1731004270604-78999bfc0bf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3Bjb3JuJTIwY2luZW1hJTIwc25hY2tzfGVufDF8fHx8MTc2MjU4MjQzNnww&ixlib=rb-4.1.0&q=80&w=1080', '2025.02.01(토)', '2025.02.21(금)', '전국 롯데시네마', NULL, '이벤트'),
('<헤레티> 특별 증정 이벤트', '영화 관람 후 한정판 굿즈를 받아가세요', 'https://images.unsplash.com/photo-1515100122522-6efd24d7d218?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjB0aGVhdGVyJTIwZXZlbnR8ZW58MXx8fHwxNzYyNjc1OTYxfDA&ixlib=rb-4.1.0&q=80&w=1080', '2025.01.04(토)', '2025.01.10(금)', '전국 메가박스', NULL, '굿즈 증정');

-- ============================================
-- 완료!
-- ============================================
-- 이제 테이블이 생성되었습니다.
-- Supabase Dashboard에서 확인하세요:
-- Table Editor 탭에서 movies, events, reviews, watchlist를 볼 수 있습니다.
