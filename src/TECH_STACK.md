# Cinepals - 기술 스택

## 프로젝트 개요
영화관 웹사이트 "Cinepals" - 현재 상영중인 영화, 이벤트, 커뮤니티 기능을 제공하는 풀스택 웹 애플리케이션

**목적:** 학부생 졸업 포트폴리오  
**발표 환경:** Figma Slide live interaction prototype  
**최적화 해상도:** 1440x1024

---

## 📚 프론트엔드

### 핵심 프레임워크 & 라이브러리
| 기술 | 버전 | 용도 |
|------|------|------|
| **React** | 18+ | UI 컴포넌트 기반 프론트엔드 프레임워크 |
| **TypeScript** | - | 타입 안정성 및 코드 품질 향상 |
| **Tailwind CSS** | 4.0 | 유틸리티 우선 CSS 프레임워크, 디자인 시스템 구축 |
| **Vite** | - | 빠른 개발 서버 및 빌드 도구 |

### UI/UX 라이브러리
| 라이브러리 | 용도 |
|-----------|------|
| **lucide-react** | 아이콘 시스템 (Star, Clock, MapPin, Film 등) |
| **shadcn/ui** | 재사용 가능한 UI 컴포넌트 라이브러리 (Dialog, Button, Tabs, Badge, Skeleton 등) |
| **sonner** | 토스트 알림 시스템 |

### 애니메이션 & 인터랙션
- **Intersection Observer API** - 스크롤 기반 애니메이션 (FadeIn, StaggerChildren 컴포넌트)
- **CSS Transitions** - 부드러운 마이크로 인터랙션
- **Custom Hooks** - 재사용 가능한 애니메이션 로직

### 주요 기능 구현
- ✅ **스켈레톤 로딩 UI** - 데이터 로딩 시 사용자 경험 개선
- ✅ **스크롤 애니메이션** - Intersection Observer 기반 FadeIn, StaggerChildren
- ✅ **마이크로 인터랙션** - 호버, 클릭 등 사용자 피드백
- ✅ **검색 기능** - 실시간 영화 검색 및 필터링
- ✅ **반응형 캐러솔** - 영화/이벤트 슬라이더 (Letterboxd/왓챠 스타일 레이아웃)

---

## 🗄️ 백엔드

### BaaS (Backend as a Service)
| 기술 | 버전 | 용도 |
|------|------|------|
| **Supabase** | - | PostgreSQL 기반 백엔드 플랫폼 |
| **@supabase/supabase-js** | - | Supabase JavaScript 클라이언트 |

### 데이터베이스 스키마
```sql
-- 주요 테이블
- movies          # 영화 정보 (제목, 장르, 평점, 러닝타임, 포스터 등)
- events          # 영화관 이벤트 (제목, 설명, 이미지, 날짜, 위치, 할인)
- reviews         # 사용자 리뷰 (평점, 코멘트)
- watchlists      # 찜하기 목록
- users           # 사용자 인증 정보
```

### 구현된 백엔드 기능
- ✅ **회원가입/로그인** - Supabase Auth
- ✅ **리뷰 시스템** - CRUD 작업 (Create, Read, Update, Delete)
- ✅ **찜하기 기능** - 사용자별 영화 북마크
- ✅ **실시간 데이터 동기화** - Supabase Realtime (선택적)

### 현재 데이터 전략
- **개발 환경:** Supabase 백엔드 유지 + 더미 데이터 사용
- **프로덕션 준비:** 실제 데이터베이스 연동 가능한 구조

---

## 🎨 디자인 시스템

### 컬러 팔레트
| 색상 코드 | 용도 |
|----------|------|
| `#242A32` | 메인 배경색 (다크 테마) |
| `#4E5968` | 보조 텍스트, 비활성 요소 |
| `#FBB343` | 주요 CTA 버튼, 포인트 컬러 (제한적 사용) |

### 타이포그래피
- **시스템:** `/styles/globals.css`에서 HTML 요소별 기본 스타일 정의
- **원칙:** Tailwind 폰트 클래스(text-2xl, font-bold 등) 사용 제한, 전역 스타일 우선

### 레이아웃 철학
- **참고 디자인:** Letterboxd, 왓챠
- **특징:** 컨텐츠 정렬 + 캐러솔 버튼은 마진 영역 배치
- **그리드 시스템:** 일정한 마진으로 정렬된 카드 레이아웃

---

## 📂 프로젝트 구조

```
/
├── App.tsx                      # 메인 앱 컴포넌트 (라우팅)
├── components/
│   ├── AuthDialog.tsx           # 로그인/회원가입 모달
│   ├── Header.tsx               # 네비게이션 헤더
│   ├── MovieSlider.tsx          # 영화 캐러솔
│   ├── MovieCard.tsx            # 영화 카드 컴포넌트
│   ├── MovieDetailPage.tsx      # 영화 상세 페이지
│   ├── EventCard.tsx            # 이벤트 카드
│   ├── EventsPage.tsx           # 이벤트 목록 페이지
│   ├── CommunityPage.tsx        # 커뮤니티 페이지
│   ├── ListsPage.tsx            # 리스트 페이지
│   ├── SearchDialog.tsx         # 검색 모달
│   ├── ReviewDialog.tsx         # 리뷰 작성 모달
│   ├── FadeIn.tsx               # 스크롤 애니메이션 컴포넌트
│   ├── StaggerChildren.tsx      # 순차 애니메이션 컴포넌트
│   ├── MovieCardSkeleton.tsx    # 로딩 스켈레톤
│   └── ui/                      # shadcn/ui 컴포넌트
├── lib/
│   ├── supabase.ts              # Supabase 클라이언트 설정
│   └── utils.ts                 # 유틸리티 함수
├── styles/
│   └── globals.css              # 전역 스타일, 디자인 토큰
└── supabase-setup.sql           # 데이터베이스 스키마
```

---

## 🚀 주요 구현 기능

### 페이지 구성
1. **메인 페이지** - 영화 슬라이더, 현재 상영작, 개봉 예정작, 이벤트
2. **영화 상세 페이지** - 영화 정보, 리뷰, 찜하기
3. **이벤트 페이지** - 진행중/종료된 이벤트 탭 구분
4. **커뮤니티 페이지** - 리뷰 게시판
5. **리스트 페이지** - 큐레이션 리스트
6. **검색** - 실시간 검색 및 장르 필터

### 사용자 인터랙션
- 스크롤 기반 페이드인 애니메이션
- 호버 효과 및 트랜지션
- 모달 기반 로그인/리뷰 작성
- 실시간 검색 필터링
- 찜하기 토글

### 성능 최적화
- 스켈레톤 UI로 로딩 상태 표시
- 이미지 지연 로딩 (ImageWithFallback)
- 컴포넌트 기반 코드 분리

---

## 🔗 외부 서비스 연동

| 서비스 | 용도 |
|--------|------|
| **Unsplash API** | 이벤트/영화 이미지 (개발 환경) |
| **Supabase** | 인증, 데이터베이스, 스토리지 |

---

## 📝 개발 환경 설정

### Prerequisites
```bash
- Node.js 18+
- npm or yarn
- Supabase 계정
```

### 환경 변수
```javascript
// lib/supabase.ts에 직접 설정
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';
```

### 실행
```bash
# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

---

## 📊 프로젝트 현황

### ✅ 완료된 기능
- [x] 메인 페이지 레이아웃 및 디자인
- [x] 영화 슬라이더 및 카드 컴포넌트
- [x] 이벤트 페이지
- [x] 검색 기능
- [x] 영화 상세 페이지
- [x] 스켈레톤 로딩 UI
- [x] 스크롤 애니메이션
- [x] 마이크로 인터랙션
- [x] 커뮤니티 페이지 (탭 스타일링 포함)
- [x] Supabase 연동 (회원가입/로그인, 리뷰, 찜하기)

### 🎯 기술적 특징
- **타입 안정성:** TypeScript 전면 도입
- **컴포넌트 재사용성:** shadcn/ui 기반 일관된 UI
- **애니메이션:** 성능 최적화된 CSS + Intersection Observer
- **백엔드 연동:** Supabase로 풀스택 기능 구현
- **디자인 일관성:** 디자인 토큰 기반 스타일 시스템

---

## 👨‍💻 개발자 노트

**프로젝트 목표:** 실무 수준의 풀스택 웹 애플리케이션 포트폴리오 구축  
**학습 포인트:**
- React 컴포넌트 설계 및 상태 관리
- Tailwind CSS를 활용한 반응형 디자인
- Supabase BaaS를 활용한 빠른 백엔드 구축
- TypeScript 타입 시스템
- 사용자 경험을 고려한 애니메이션 및 인터랙션

**포트폴리오 강점:**
1. 실제 서비스 가능한 수준의 완성도
2. 디자인 시스템 구축 경험
3. 프론트엔드-백엔드 통합 개발 경험
4. 성능 최적화 및 UX 개선 사례
