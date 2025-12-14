# Cinepals - Supabase 풀스택 전환 계획서

## 📋 프로젝트 개요

**브랜드명:** Cinepals  
**목적:** 학부 졸업 포트폴리오 (Figma Slide에서 URL Embed로 발표)  
**기술 스택:** React + Tailwind CSS + Supabase  
**해상도:** 1440x1024 (고정)  
**색상:**
- 메인 배경: #242A32
- 서브 배경: #4E5968
- 포인트 컬러 (CTA): #FBB343

---

## 🎯 현재 상태 (2025.11.18)

### ✅ 완료된 것
- [x] UI/UX 디자인 완성
- [x] 더미 데이터로 영화/이벤트 표시
- [x] Letterboxd/왓챠 스타일 레이아웃
- [x] 컴포넌트 분리 (Header, MovieCard, EventCard 등)
- [x] Dialog를 통한 예매 UI
- [x] 반응형 캐러솔 (좌우 버튼)
- [x] Scroll to Top 기능

### 📁 현재 파일 구조
```
/App.tsx - 메인 페이지
/components/
  - Header.tsx
  - MovieCard.tsx
  - EventCard.tsx
  - MovieSlider.tsx
  - ScrollToTop.tsx
  - CinepalsLogo.tsx
  - ui/ (shadcn/ui 컴포넌트들)
```

### 🗄️ 현재 더미 데이터
```typescript
// App.tsx 내부
const MOVIES: Movie[] = [
  { id, title, genre, rating, runtime, releaseDate, posterUrl, description, ageRating }
  // 5개 영화
];

const EVENTS: Event[] = [
  { id, title, description, imageUrl, startDate, endDate, location, tag }
  // 3개 이벤트
];
```

---

## 🚀 다음 단계: Supabase 풀스택 전환

### 왜 Supabase?

**기존 문제:**
- XAMPP + MariaDB = localhost만 가능
- localhost는 Figma Slide URL Embed 불가능 ❌
- ngrok는 불안정 (발표 중 위험)

**Supabase 장점:**
- ✅ 완전 무료 (학생용으로 충분)
- ✅ URL Embed 완벽 작동
- ✅ 회원가입/로그인 내장
- ✅ Vercel 배포 1분 소요
- ✅ 졸업 후에도 계속 사용 가능
- ✅ 포트폴리오 강화

---

## 📊 Supabase 데이터베이스 설계

### 1. movies 테이블
```sql
CREATE TABLE movies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
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
```

### 2. events 테이블
```sql
CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
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
```

### 3. bookings 테이블 (예매 정보)
```sql
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  movie_id UUID REFERENCES movies(id) ON DELETE CASCADE,
  theater TEXT NOT NULL,
  show_time TEXT,
  show_date TEXT,
  seats TEXT[], -- 좌석 번호 배열 ["A1", "A2"]
  total_price INTEGER,
  status TEXT DEFAULT 'confirmed', -- confirmed, cancelled
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 4. reviews 테이블 (선택사항)
```sql
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  movie_id UUID REFERENCES movies(id) ON DELETE CASCADE,
  rating DECIMAL(3,1),
  comment TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, movie_id) -- 한 사람당 한 영화에 한 번만 리뷰
);
```

---

## 🎨 추가할 기능

### 1. 🔐 회원가입 & 로그인
- Header에 "로그인" / "회원가입" 버튼 추가
- Supabase Auth 사용 (이메일/비밀번호)
- 로그인 상태에 따라 Header UI 변경
- 로그아웃 기능

**구현 파일:**
- `/components/AuthDialog.tsx` (신규 생성)
- `/components/Header.tsx` (수정)

### 2. 🎫 영화 예매 시스템
- 좌석 선택 UI (극장 좌석 배치도)
- 상영 시간 선택
- 예매 확정 → Supabase DB 저장
- 예매 번호 생성

**구현 파일:**
- `/components/SeatSelection.tsx` (신규 생성)
- `/components/BookingDialog.tsx` (App.tsx에서 분리)

### 3. 📱 마이페이지
- 예매 내역 확인
- 예매 취소 기능
- 찜한 영화 목록 (선택사항)
- 내가 작성한 리뷰 (선택사항)

**구현 파일:**
- `/components/MyPage.tsx` (신규 생성)
- `/components/BookingList.tsx` (신규 생성)

### 4. 🎬 실시간 영화 데이터
- 더미 데이터 → Supabase 마이그레이션
- `useEffect`로 DB에서 영화/이벤트 불러오기
- 관리자 페이지 (선택사항)

**수정 파일:**
- `/App.tsx` - DB에서 데이터 fetch

---

## ⏱️ 작업 일정 (총 1.5시간)

### Phase 1: Supabase 설정 (15분)
1. `supabase_connect` 도구 실행
2. Supabase 프로젝트 생성
3. 테이블 생성 (SQL Editor 사용)
4. 더미 데이터 업로드

### Phase 2: 인증 구현 (20분)
1. AuthDialog 컴포넌트 생성
2. 회원가입/로그인 폼
3. Header 수정 (로그인 버튼 추가)
4. Supabase Auth 연동

### Phase 3: 예매 시스템 (30분)
1. SeatSelection 컴포넌트 생성
2. 좌석 선택 로직
3. 예매 확정 → DB 저장
4. BookingDialog 개선

### Phase 4: 마이페이지 (15분)
1. MyPage 컴포넌트 생성
2. 예매 내역 불러오기
3. 예매 취소 기능
4. Header에 마이페이지 링크 추가

### Phase 5: 데이터 마이그레이션 (10분)
1. App.tsx 수정 - DB에서 영화 불러오기
2. 로딩 상태 추가
3. 에러 핸들링

### Phase 6: 배포 (5분)
1. GitHub 연결
2. Vercel 배포
3. 환경변수 설정 (Supabase Keys)
4. URL 확인

---

## 🎬 Figma Slide 발표 준비

### 1. Vercel 배포 완료 후
```
배포 URL: https://cinepals.vercel.app
```

### 2. Figma Slide에 추가
1. Figma Slide 열기
2. "Embed" 도구 선택
3. URL 입력: https://cinepals.vercel.app
4. 크기 조정: 1440 x 1024 (또는 Full screen)
5. 저장

### 3. 발표 시나리오
```
1. Figma Slide 발표 모드 실행
2. URL Embed 영역 클릭
3. 실제 웹사이트 작동 시연:
   
   STEP 1: 회원가입
   - "회원가입" 버튼 클릭
   - 이메일/비밀번호 입력
   - 계정 생성 완료 ✅
   
   STEP 2: 로그인
   - 방금 만든 계정으로 로그인
   - Header에 "안녕하세요, OOO님" 표시 ✅
   
   STEP 3: 영화 예매
   - 영화 카드에서 "예매하기" 클릭
   - 극장 선택 → 시간 선택
   - 좌석 선택 (A1, A2)
   - "예매 확정" 클릭
   - DB에 저장 완료! ✅
   
   STEP 4: 마이페이지
   - Header에서 "마이페이지" 클릭
   - 방금 예매한 내역 확인 ✅
   - 예매 번호, 좌석, 시간 모두 표시
   
   STEP 5: 새로고침 (중요!)
   - F5 또는 새로고침 버튼
   - 로그인 상태 유지 ✅
   - 예매 내역 그대로 유지 ✅
   
   → "실제 작동하는 서비스입니다!" 🎉
```

### 4. 백업 계획
- Plan A: URL Embed (메인)
- Plan B: Copy Design (인터넷 끊길 경우)

---

## 💾 환경변수 설정

### Vercel 배포 시 필요한 환경변수
```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 로컬 개발 (.env)
```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## 📚 추가 학습 자료

### Supabase 공식 문서
- Auth: https://supabase.com/docs/guides/auth
- Database: https://supabase.com/docs/guides/database
- React 예제: https://supabase.com/docs/guides/getting-started/quickstarts/reactjs

### 참고 코드
```typescript
// Supabase 클라이언트 초기화
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

// 회원가입
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password123'
})

// 로그인
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password123'
})

// 데이터 조회
const { data: movies } = await supabase
  .from('movies')
  .select('*')
  .order('created_at', { ascending: false })

// 데이터 삽입
const { data, error } = await supabase
  .from('bookings')
  .insert({
    movie_id: 'xxx',
    theater: 'CGV 강남',
    seats: ['A1', 'A2']
  })
```

---

## ✅ 체크리스트 (다음에 시작할 때)

### 준비 단계
- [ ] Supabase 계정 생성/로그인
- [ ] supabase_connect 도구 실행
- [ ] 프로젝트 생성

### 개발 단계
- [ ] 테이블 생성 (movies, events, bookings, reviews)
- [ ] 더미 데이터 마이그레이션
- [ ] AuthDialog 컴포넌트 생성
- [ ] SeatSelection 컴포넌트 생성
- [ ] MyPage 컴포넌트 생성
- [ ] App.tsx 수정 (DB 연동)
- [ ] Header 수정 (로그인 버튼)

### 배포 단계
- [ ] GitHub 연결
- [ ] Vercel 배포
- [ ] 환경변수 설정
- [ ] 배포 URL 확인

### 발표 준비
- [ ] Figma Slide에 URL Embed 추가
- [ ] 발표 시나리오 연습
- [ ] 백업 계획 준비 (Copy Design)
- [ ] 테스트 계정 생성 (발표용)

---

## 🎯 예상 결과

### BEFORE (현재 - 더미 데이터)
```
❌ 데이터 저장 안 됨
❌ 새로고침 시 초기화
❌ 사용자 구분 불가
❌ "UI만 만들었습니다" 느낌
```

### AFTER (Supabase 연동)
```
✅ 실제 회원가입/로그인
✅ 예매 내역 DB 저장
✅ 새로고침 후에도 유지
✅ 사용자별 데이터 관리
✅ "실제 서비스처럼 작동합니다!" 🎉
```

---

## 💼 포트폴리오 어필 포인트

### 발표 시 강조할 것
1. **기술 스택 선택 이유**
   - "PHP + MariaDB에서 React + Supabase로 전환한 이유는..."
   - "최신 기술 스택으로 확장성과 유지보수성 개선"

2. **풀스택 구현 능력**
   - "프론트엔드뿐만 아니라 백엔드 DB 설계도 직접"
   - "인증, CRUD, 관계형 데이터 설계"

3. **실제 배포 경험**
   - "Vercel을 통한 실제 배포"
   - "환경변수 관리, CI/CD 경험"

4. **사용자 경험 중심**
   - "Letterboxd/왓챠 레퍼런스 연구"
   - "1440x1024 해상도 최적화"
   - "컬러 시스템 (#242A32, #4E5968, #FBB343)"

---

## 📞 다음 작업 시작 시

1. 이 파일(`SUPABASE_PLAN.md`) 읽기
2. 체크리스트 확인
3. "Supabase 연동 시작하겠습니다" 라고 말하기
4. AI가 `supabase_connect` 도구 실행

---

**생성 일시:** 2025.11.18  
**프로젝트:** Cinepals (영화관 웹사이트)  
**목적:** 학부 졸업 포트폴리오  
**목표:** Figma Slide URL Embed 발표

---

## 🚨 중요 포인트

### localhost는 URL Embed 불가능!
```
❌ XAMPP + MariaDB (localhost:8080)
   → Figma Slide에서 접근 불가
   → "연결 실패" 오류

✅ Vercel + Supabase (https://cinepals.vercel.app)
   → Figma Slide에서 완벽 작동
   → 실시간 상호작용 가능
```

### ngrok는 위험!
```
⚠️ 발표 중 컴퓨터 켜져있어야 함
⚠️ 인터넷 끊기면 죽음
⚠️ 프로세스 종료하면 죽음
⚠️ URL 매번 바뀜 (무료 버전)

→ 발표용으로 부적합!
```

### Supabase + Vercel이 최선!
```
✅ 완전 무료
✅ 24시간 작동
✅ 안정적
✅ URL 고정
✅ 졸업 후에도 사용 가능
```

---

**화이팅! 🎓🚀**
