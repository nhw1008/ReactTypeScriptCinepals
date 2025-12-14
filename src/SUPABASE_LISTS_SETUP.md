# Supabase Lists 기능 설정 가이드

Lists 기능을 위한 Supabase 테이블 설정 방법입니다.

## 📋 1단계: `lists` 테이블 생성

Supabase Dashboard → SQL Editor에서 실행:

```sql
-- lists 테이블 생성
create table lists (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  cover_image text,
  created_by uuid references auth.users(id) on delete cascade,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS (Row Level Security) 활성화
alter table lists enable row level security;

-- 모든 사용자가 리스트를 조회할 수 있도록 설정
create policy "Lists are viewable by everyone"
  on lists for select
  using (true);

-- 로그인한 사용자만 리스트를 생성할 수 있도록 설정
create policy "Users can create lists"
  on lists for insert
  with check (auth.uid() = created_by);

-- 리스트 작성자만 수정 가능
create policy "Users can update own lists"
  on lists for update
  using (auth.uid() = created_by);

-- 리스트 작성자만 삭제 가능
create policy "Users can delete own lists"
  on lists for delete
  using (auth.uid() = created_by);
```

## 📋 2단계: `list_movies` 테이블 생성

```sql
-- list_movies 조인 테이블 생성
create table list_movies (
  id uuid default gen_random_uuid() primary key,
  list_id uuid references lists(id) on delete cascade not null,
  movie_id uuid references movies(id) on delete cascade not null,
  "order" integer not null default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(list_id, movie_id)
);

-- RLS 활성화
alter table list_movies enable row level security;

-- 모든 사용자가 리스트의 영화를 조회 가능
create policy "List movies are viewable by everyone"
  on list_movies for select
  using (true);

-- 리스트 작성자만 영화 추가 가능
create policy "List creators can add movies"
  on list_movies for insert
  with check (
    exists (
      select 1 from lists
      where lists.id = list_movies.list_id
      and lists.created_by = auth.uid()
    )
  );

-- 리스트 작성자만 영화 삭제 가능
create policy "List creators can remove movies"
  on list_movies for delete
  using (
    exists (
      select 1 from lists
      where lists.id = list_movies.list_id
      and lists.created_by = auth.uid()
    )
  );
```

## 📋 3단계: 초기 더미 데이터 추가

```sql
-- 샘플 리스트 생성 (회원가입 후 자신의 UUID로 교체 필요)
-- auth.users 테이블에서 본인의 UUID를 확인하세요
insert into lists (title, description, cover_image, created_by) values
  (
    '크리스마스 특선 영화',
    '따뜻한 연말을 보내기 좋은 크리스마스 영화 모음',
    'https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=800&h=533',
    'YOUR_USER_UUID_HERE'
  ),
  (
    '아카데미 수상작',
    '역대 아카데미 작품상 수상작 컬렉션',
    'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=533',
    'YOUR_USER_UUID_HERE'
  ),
  (
    'SF 명작 모음',
    '꼭 봐야 할 SF 영화 리스트',
    'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=533',
    'YOUR_USER_UUID_HERE'
  ),
  (
    '애니메이션 베스트',
    '전 세계가 사랑한 애니메이션 걸작',
    'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=533',
    'YOUR_USER_UUID_HERE'
  );

-- 리스트에 영화 추가 (리스트 ID와 영화 ID 필요)
-- 아래는 예시이므로 실제 데이터에 맞게 수정 필요
-- insert into list_movies (list_id, movie_id, "order") values
--   ('list-uuid-1', 'movie-uuid-1', 1),
--   ('list-uuid-1', 'movie-uuid-2', 2),
--   ('list-uuid-1', 'movie-uuid-3', 3);
```

## ✅ 설정 완료 확인

1. **Lists 조회 테스트**: `/lists` 페이지에서 리스트 목록 확인
2. **List Detail 조회**: 리스트 카드 클릭 시 상세 페이지 표시
3. **영화 목록 확인**: 리스트 상세 페이지에서 영화들 확인

## 🔍 도움말

### 본인 UUID 확인 방법
```sql
-- Supabase SQL Editor에서 실행
select id, email from auth.users;
```

### 영화 ID 확인 방법
```sql
-- 현재 등록된 영화 ID 조회
select id, title from movies order by created_at desc;
```

### 리스트에 영화 추가 예시
```sql
-- 1. 리스트 ID 확인
select id, title from lists;

-- 2. 영화 추가
insert into list_movies (list_id, movie_id, "order") values
  ('리스트UUID', '영화UUID1', 1),
  ('리스트UUID', '영화UUID2', 2);
```

## 🎯 다음 단계 (선택사항)

- **리스트 생성 UI**: 사용자가 직접 리스트를 만들 수 있는 폼 추가
- **영화 추가/삭제**: 리스트에 영화를 추가/삭제하는 기능
- **리스트 정렬**: 인기순, 최신순 정렬 기능
- **좋아요 기능**: 다른 사용자의 리스트에 좋아요 가능

---

**완료!** 🎉 Lists 기능이 Supabase와 연동되었습니다.
