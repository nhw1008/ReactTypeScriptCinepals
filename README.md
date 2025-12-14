# 🎬 Cinepals - 영화관 웹사이트

> 학부생 졸업 포트폴리오 프로젝트  
> React + Tailwind CSS + Supabase 기반 풀스택 영화관 웹 애플리케이션

![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white)

<br/>

## 📖 프로젝트 소개

**Cinepals**는 현재 상영중인 영화와 영화관 이벤트를 확인할 수 있는 모던 웹 애플리케이션입니다.  
Letterboxd와 왓챠의 세련된 UI/UX를 참고하여 사용자 친화적인 인터페이스를 구현했습니다.

### 주요 기능
- 🎥 **영화 탐색** - 현재 상영작 및 개봉 예정작 확인
- 🎉 **이벤트 정보** - 진행중/종료된 영화관 이벤트 조회
- 🔍 **실시간 검색** - 제목, 장르 기반 영화 검색
- ⭐ **리뷰 시스템** - 영화 평점 및 코멘트 작성
- 💖 **찜하기 기능** - 관심 영화 북마크
- 👤 **회원 인증** - 회원가입/로그인 및 마이페이지

<br/>

## 🎨 디자인 시스템

### 컬러 팔레트
| 색상 | 용도 |
|------|------|
| `#242A32` | 메인 배경색 (다크 테마) |
| `#4E5968` | 보조 텍스트, 비활성 요소 |
| `#FBB343` | 주요 CTA 버튼, 포인트 컬러 |

### 디자인 참고
- **Letterboxd** - 일정한 마진으로 정렬된 컨텐츠 레이아웃
- **왓챠** - 캐러솔 버튼을 마진 영역에 배치하는 패턴
- **최적화 해상도:** 1440x1024

<br/>

## 🛠️ 기술 스택

### Frontend
- **React 18+** - 컴포넌트 기반 UI 프레임워크
- **TypeScript** - 타입 안정성
- **Tailwind CSS 4.0** - 유틸리티 우선 CSS
- **Vite** - 빠른 개발 서버 및 빌드 도구

### UI/UX Libraries
- **shadcn/ui** - 재사용 가능한 UI 컴포넌트
- **lucide-react** - 아이콘 시스템
- **sonner** - 토스트 알림
- **Intersection Observer API** - 스크롤 애니메이션

### Backend (BaaS)
- **Supabase** - PostgreSQL 기반 백엔드 플랫폼
  - Authentication (회원가입/로그인)
  - Database (영화, 이벤트, 리뷰, 찜하기)
  - Real-time subscriptions

<br/>

## 🚀 시작하기

### Prerequisites
- Node.js 18 이상
- npm 또는 yarn
- Supabase 계정

### 설치 및 실행

1. **저장소 클론**
```bash
git clone https://github.com/YOUR_USERNAME/cinepals.git
cd cinepals
```

2. **의존성 설치**
```bash
npm install
```

3. **환경 변수 설정** ⚠️ 중요!

`.env.local` 파일을 프로젝트 루트에 생성하고 다음 내용을 입력하세요:

```bash
# .env.local
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

**Supabase 프로젝트 설정 방법:**
1. [Supabase](https://supabase.com) 가입 및 새 프로젝트 생성
2. Project Settings > API 섹션에서 다음 정보 복사:
   - `Project URL` → `VITE_SUPABASE_URL`
   - `anon/public key` → `VITE_SUPABASE_ANON_KEY`
3. `.env.local` 파일에 붙여넣기

> 💡 **참고:** `.env.example` 파일에서 템플릿을 확인할 수 있습니다.

4. **데이터베이스 스키마 적용**

Supabase 대시보드의 SQL Editor에서 `supabase-setup.sql` 파일의 내용을 실행하세요.

5. **개발 서버 실행**
```bash
npm run dev
```

브라우저에서 `http://localhost:5173`을 열어 확인하세요.

### 빌드
```bash
npm run build
```

<br/>

## 📂 프로젝트 구조

```
cinepals/
├── App.tsx                      # 메인 앱 컴포넌트 (라우팅)
├── components/
│   ├── AuthDialog.tsx           # 로그인/회원가입 모달
│   ├── Header.tsx               # 네비게이션 헤더
│   ├── MovieSlider.tsx          # 영화 캐러솔
│   ├── MovieCard.tsx            # 영화 카드
│   ├── MovieDetailPage.tsx      # 영화 상세 페이지
│   ├── EventsPage.tsx           # 이벤트 목록
│   ├── CommunityPage.tsx        # 커뮤니티 (리뷰 게시판)
│   ├── ListsPage.tsx            # 큐레이션 리스트
│   ├── SearchDialog.tsx         # 검색 모달
│   ├── FadeIn.tsx               # 스크롤 애니메이션
│   └── ui/                      # shadcn/ui 컴포넌트
├── lib/
│   ├── supabase.ts              # Supabase 클라이언트
│   └── utils.ts                 # 유틸리티 함수
├── styles/
│   └── globals.css              # 전역 스타일, 디자인 토큰
├── .env.local                   # 환경 변수 (Git 무시)
├── .env.example                 # 환경 변수 예시
└── supabase-setup.sql           # 데이터베이스 스키마
```

<br/>

## 📊 주요 기능 구현

### 1️⃣ 영화 탐색
- 현재 상영작/개봉 예정작 카테고리 구분
- 반응형 캐러솔 슬라이더
- 영화 카드 호버 효과 및 트랜지션

### 2️⃣ 검색 시스템
- 실시간 제목 검색
- 장르별 필터링
- 검색 결과 하이라이팅

### 3️⃣ 영화 상세 페이지
- 영화 정보 (제목, 장르, 러닝타임, 관람가, 평점)
- 사용자 리뷰 CRUD
- 찜하기 토글 기능

### 4️⃣ 이벤트 페이지
- 진행중/종료된 이벤트 탭 구분
- 이벤트 카드 레이아웃
- 날짜, 위치, 할인 정보 표시

### 5️⃣ 커뮤니티
- 영화별 리뷰 게시판
- 평점 및 코멘트 시스템
- 사용자 인증 연동

### 6️⃣ 애니메이션
- 스크롤 기반 FadeIn 효과
- StaggerChildren (순차 애니메이션)
- 스켈레톤 로딩 UI

<br/>

## 🔒 보안

⚠️ **환경 변수 관리**
- API 키는 `.env.local` 파일에 보관 (Git에서 무시됨)
- 절대 API 키를 코드에 직접 입력하지 마세요
- 배포 시 호스팅 플랫폼의 환경 변수 설정 사용

자세한 내용은 [SECURITY.md](./SECURITY.md)를 참고하세요.

<br/>

## 📝 데이터베이스 스키마

### 주요 테이블
- **movies** - 영화 정보 (제목, 장르, 평점, 포스터 등)
- **events** - 이벤트 정보 (제목, 날짜, 위치, 할인)
- **reviews** - 사용자 리뷰 (평점, 코멘트)
- **watchlists** - 찜하기 목록
- **users** - Supabase Auth 자동 관리

자세한 스키마는 `supabase-setup.sql` 파일을 참고하세요.

<br/>

## 🎯 성능 최적화

- ✅ 스켈레톤 UI를 활용한 로딩 상태 개선
- ✅ 이미지 지연 로딩 (ImageWithFallback)
- ✅ 컴포넌트 기반 코드 분리
- ✅ CSS 트랜지션으로 성능 최적화
- ✅ Intersection Observer API 활용

<br/>

## 📚 관련 문서

- [기술 스택 상세 (TECH_STACK.md)](./TECH_STACK.md)
- [보안 가이드 (SECURITY.md)](./SECURITY.md)
- [Supabase 설정 가이드 (SETUP_INSTRUCTIONS.md)](./SETUP_INSTRUCTIONS.md)

<br/>

## 🎓 학습 포인트

이 프로젝트를 통해 다음을 경험했습니다:

1. **React 컴포넌트 설계** - 재사용 가능한 컴포넌트 구조
2. **TypeScript 타입 시스템** - 타입 안정성 확보
3. **Tailwind CSS 디자인 시스템** - 일관된 UI 구축
4. **Supabase BaaS 활용** - 전통적인 백엔드 없이 풀스택 개발
5. **사용자 경험 개선** - 애니메이션, 로딩 상태, 마이크로 인터랙션

<br/>

## 🤝 기여

포트폴리오 프로젝트이지만, 피드백이나 제안은 언제나 환영합니다!

<br/>

## 📄 라이선스

이 프로젝트는 학습 및 포트폴리오 목적으로 제작되었습니다.

<br/>

---

**Made with ❤️ for graduation portfolio**
