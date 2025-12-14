import { Skeleton } from "./ui/skeleton";

export function MovieCardSkeleton() {
  return (
    <div className="flex-shrink-0 w-[220px]">
      {/* Poster Skeleton */}
      <Skeleton className="aspect-[2/3] rounded-xl mb-3" />
      
      {/* Title Skeleton */}
      <Skeleton className="h-5 w-3/4 mb-2" />
      
      {/* Info Skeleton */}
      <div className="flex items-center gap-2 mb-2">
        <Skeleton className="h-5 w-12" />
        <Skeleton className="h-4 w-16" />
      </div>
      
      {/* Rating Skeleton */}
      <Skeleton className="h-4 w-20" />
    </div>
  );
}
