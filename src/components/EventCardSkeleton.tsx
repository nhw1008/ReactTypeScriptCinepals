import { Skeleton } from "./ui/skeleton";

export function EventCardSkeleton() {
  return (
    <div className="bg-[#4e5968]/20 border border-[#4e5968]/30 rounded-xl overflow-hidden">
      {/* Image Skeleton */}
      <Skeleton className="aspect-video w-full" />
      
      <div className="p-5">
        {/* Title Skeleton */}
        <Skeleton className="h-6 w-3/4 mb-3" />
        
        {/* Description Skeleton */}
        <div className="space-y-2 mb-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        
        {/* Date Skeleton */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-3 w-4" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>
    </div>
  );
}
