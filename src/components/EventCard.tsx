import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface Event {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  startDate: string;
  endDate: string;
  badge?: string;
}

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-[#1a1f26] rounded-lg overflow-hidden border border-[#4e5968]/30 hover:border-[#FBB343]/50 transition-all hover:scale-105 cursor-pointer group">
      <div className="aspect-[16/9] relative overflow-hidden">
        <ImageWithFallback
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {event.badge && (
          <div className="absolute top-3 left-3 bg-[#FBB343] text-[#242A32] px-3 py-1 rounded text-sm">
            {event.badge}
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-white mb-2 line-clamp-1">{event.title}</h3>
        <p className="text-[#4e5968] text-sm mb-3 line-clamp-2">{event.description}</p>
        <div className="flex items-center justify-between text-xs">
          <span className="text-[#4e5968]">{event.startDate}</span>
          <span className="text-[#4e5968]">~</span>
          <span className="text-[#4e5968]">{event.endDate}</span>
        </div>
      </div>
    </div>
  );
}
