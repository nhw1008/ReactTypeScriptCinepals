import { createClient } from "@supabase/supabase-js";

// 환경 변수에서 Supabase 정보 로드
const supabaseUrl = import.meta?.env?.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta?.env?.VITE_SUPABASE_ANON_KEY;

// 환경 변수 검증
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    '⚠️ Supabase 환경 변수가 설정되지 않았습니다.\n' +
    '다음 단계를 따라주세요:\n' +
    '1. 프로젝트 루트에 .env.local 파일 생성\n' +
    '2. 다음 내용 추가:\n' +
    '   VITE_SUPABASE_URL=https://your-project.supabase.co\n' +
    '   VITE_SUPABASE_ANON_KEY=your-anon-key\n' +
    '3. 개발 서버 재시작 (npm run dev)'
  );
  
  // 개발 환경에서는 경고만 표시하고 빈 클라이언트 생성
  // 프로덕션에서는 에러 발생
  if (import.meta?.env?.MODE === 'production') {
    throw new Error('Supabase 환경 변수가 설정되지 않았습니다.');
  }
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
);

// Database Types
export interface Movie {
  id: string;
  title: string;
  genre: string;
  rating: number;
  runtime: number;
  release_date: string;
  poster_url: string;
  description: string;
  age_rating: string;
  created_at?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  image_url: string;
  start_date: string;
  end_date: string;
  location: string;
  discount?: string;
  tag: string;
  created_at?: string;
}

export interface Review {
  id: string;
  user_id: string;
  movie_id: string;
  rating: number;
  comment: string;
  created_at: string;
  user_email?: string;
}

export interface Watchlist {
  id: string;
  user_id: string;
  movie_id: string;
  created_at: string;
}