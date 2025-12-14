# Cinepals - Supabase 설정 가이드

## 🎯 다음 단계

Supabase 연동이 완료되었습니다! 이제 다음 작업을 진행하세요:

---

## 📋 Step 1: Supabase 대시보드에서 SQL 실행

1. **Supabase 대시보드 접속**
   - https://app.supabase.com
   - 프로젝트 선택

2. **SQL Editor 열기**
   - 왼쪽 메뉴에서 "SQL Editor" 클릭

3. **테이블 생성 SQL 실행**
   - `/supabase-setup.sql` 파일을 열어서
   - **전체 내용을 복사**
   - SQL Editor에 붙여넣기
   - **"Run"** 버튼 클릭 ▶️

4. **결과 확인**
   - 왼쪽 메뉴에서 "Table Editor" 클릭
   - 다음 테이블들이 생성되었는지 확인:
     - ✅ movies (5개 데이터)
     - ✅ events (3개 데이터)
     - ✅ reviews
     - ✅ watchlist

---

## 🎬 구현된 기능

### 1. ✅ 회원가입 & 로그인
- Header 우측 상단에 "로그인" / "회원가입" 버튼
- 이메일 + 비밀번호 인증
- 로그인 후 사용자 드롭다운 메뉴 표시

### 2. ✅ 영화 찜하기 (Watchlist)
- 영화 카드 우측 상단 하트 아이콘
- 클릭 시 찜 목록에 추가/제거
- 로그인 필요

### 3. ✅ 리뷰 시스템
- 영화 카드 호버 → "리뷰 작성" 버튼 표시
- 10점 만점 별점 시스템
- 코멘트 작성 (선택사항)
- 로그인 필요

### 4. ✅ 마이페이지
- Header 우측 사용자 아이콘 클릭 → "내가 찜한 영화" / "내 리뷰"
- 내가 작성한 리뷰 목록
- 찜한 영화 목록
- 리뷰/찜 삭제 기능

### 5. ✅ 실시간 데이터베이스 연동
- 더미 데이터 대신 Supabase에서 실시간 불러오기
- 로딩 상태 표시
- 새로고침 후에도 데이터 유지

---

## 🧪 테스트 시나리오 (Figma Slide 발표용)

### STEP 1: 회원가입
1. "회원가입" 버튼 클릭
2. 이메일: `test@cinepals.com` / 비밀번호: `test123`
3. 회원가입 완료 후 자동으로 "로그인" 모드 전환
4. 동일한 정보로 로그인

### STEP 2: 영화 찜하기
1. 영화 카드 우측 상단 하트 ❤️ 클릭
2. "찜 목록에 추가되었습니다" 토스트 알림
3. 하트 색상 빨간색으로 변경

### STEP 3: 리뷰 작성
1. 영화 카드 호버
2. "리뷰 작성" 버튼 클릭
3. 별 클릭으로 평점 선택 (예: 8/10)
4. 코멘트 입력: "정말 재미있는 영화였습니다!"
5. "리뷰 등록" 클릭
6. "리뷰가 등록되었습니다!" 토스트 알림

### STEP 4: 마이페이지 확인
1. Header 우측 사용자 아이콘 클릭
2. "내 리뷰" 클릭
3. 방금 작성한 리뷰 확인
4. "내가 찜한 영화" 탭 클릭
5. 찜한 영화 목록 확인

### STEP 5: 새로고침 (중요!)
1. **F5** 또는 새로고침 버튼
2. ✅ 로그인 상태 유지
3. ✅ 리뷰 데이터 유지
4. ✅ 찜 목록 유지
→ **"실제 작동하는 풀스택 서비스!"** 증명 🎉

---

## 🎨 디자인 특징 (발표 시 강조)

### Letterboxd/왓챠 스타일 레이아웃
- 일정한 마진으로 컨텐츠 정렬
- 캐러솔 버튼만 마진 영역 배치
- 깔끔한 그리드 시스템

### 색상 시스템
- `#242A32` - 메인 배경 (다크)
- `#4E5968` - 서브 요소
- `#FBB343` - CTA 버튼만 제한적 사용 (산만하지 않음)

### IMDB 스타일 로고
- 노란색 티켓 모양 배경
- "CINEPALS" 텍스트

---

## 🚨 주의사항

### 1. Supabase Email 확인
- Supabase는 기본적으로 이메일 확인 필요
- **개발 중에는** Supabase 대시보드 → Authentication → Settings에서
- "Enable email confirmations" **OFF**로 설정 권장
- (졸업 발표용이므로 이메일 확인 스킵)

### 2. RLS (Row Level Security) 설정됨
- reviews: 본인만 수정/삭제 가능
- watchlist: 본인만 보기/추가/삭제
- movies/events: 모두 읽기 가능

---

## 📊 데이터베이스 구조

```
movies
├── id (UUID)
├── title
├── genre
├── rating
├── runtime
├── release_date
├── poster_url
├── description
├── age_rating
└── created_at

events
├── id (UUID)
├── title
├── description
├── image_url
├── start_date
├── end_date
├── location
├── discount
├── tag
└── created_at

reviews
├── id (UUID)
├── user_id (FK → auth.users)
├── movie_id (FK → movies)
├── rating
├── comment
└── created_at

watchlist
├── id (UUID)
├── user_id (FK → auth.users)
├── movie_id (FK → movies)
└── created_at
```

---

## 🔧 로컬 개발 실행

```bash
# 의존성 설치 (처음 한 번만)
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 http://localhost:5173 접속

---

## 🌐 Vercel 배포 (발표 전)

1. **GitHub에 푸시**
2. **Vercel 접속** (https://vercel.com)
3. "Import Project" → GitHub 연결
4. **환경변수 설정:**
   - `VITE_SUPABASE_URL` = `https://umewufakbyrwrhsqfvxs.supabase.co`
   - `VITE_SUPABASE_ANON_KEY` = `eyJhbGci...` (anon key)
5. **Deploy** 클릭
6. 배포 완료 후 URL 확인 (예: `https://cinepals.vercel.app`)

---

## 🎬 Figma Slide 설정

1. Figma Slide 열기
2. "Embed" 도구 선택
3. Vercel 배포 URL 입력
4. 크기: 1440 x 1024 (Full screen도 가능)
5. 저장 → 발표 모드에서 URL Embed가 작동!

---

## 💡 포트폴리오 어필 포인트

### 기술 스택 전환 능력
> "PHP + MariaDB → React + Supabase로 마이그레이션하여
> 최신 기술 스택과 서버리스 아키텍처를 적용했습니다."

### 풀스택 개발 역량
> "프론트엔드 UI뿐만 아니라 인증, CRUD, RLS 등
> 백엔드 로직과 보안까지 직접 설계했습니다."

### UX/UI 디자인 역량
> "Letterboxd와 왓챠를 레퍼런스로
> 사용자 친화적인 인터페이스를 구현했습니다."

### 실제 배포 경험
> "Vercel을 통해 실제 배포하고
> Figma Slide에서 live prototype으로 시연합니다."

---

## 🎉 완료!

모든 설정이 완료되었습니다.

**다음 작업:**
1. ✅ SQL 실행 (위의 Step 1)
2. ✅ 브라우저에서 테스트
3. ✅ GitHub 푸시
4. ✅ Vercel 배포
5. ✅ Figma Slide에 URL 삽입
6. ✅ 발표 연습! 🚀

---

**생성 일시:** 2025.11.19  
**프로젝트:** Cinepals  
**목적:** 학부 졸업 포트폴리오
