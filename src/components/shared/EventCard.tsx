'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { events as TEvents } from '@/lib/event-data';
import { 
  Map, 
  Mic2, 
  Camera, 
  Brain, 
  Shapes, 
  Scale, 
  Sparkles, 
  Clapperboard, 
  Sun,
  type LucideIcon
} from 'lucide-react';

// Map event IDs to their corresponding icons
const eventIcons: Record<string, LucideIcon> = {
  'treasure-hunt': Map,
  'singing': Mic2,
  'photography': Camera,
  'quiz': Brain,
  'clay-modeling': Shapes,
  'block-and-tackle': Scale,
  'surprise-event': Sparkles,
  'online-reels': Clapperboard,
  'online-photography': Sun,
};

type EventCardProps = {
  event: (typeof TEvents)[number];
};

export default function EventCard({ event }: EventCardProps) {
  const Icon = eventIcons[event.id] || Sparkles;
  
  const handleClick = () => {
    // Update the URL hash
    window.history.pushState(null, '', `#${event.id}`);
    
    // Scroll to the rules section first
    const rulesSection = document.getElementById('rules');
    if (rulesSection) {
      rulesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Dispatch custom event after a short delay to ensure component is ready
    setTimeout(() => {
      const customEvent = new CustomEvent('openEventRule', { detail: { eventId: event.id } });
      window.dispatchEvent(customEvent);
    }, 100);
  };
  
  return (
    <button onClick={handleClick} className="group block h-full w-full text-left cursor-pointer">
      <Card className="h-full flex flex-col transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1.5 hover:border-primary/60 border-accent/40 bg-card/80 backdrop-blur-sm overflow-hidden">
        <CardHeader className="pb-2 relative">
          {/* Background icon for visual emphasis */}
          <Icon className="absolute -right-4 -top-4 w-24 h-24 text-primary/10 group-hover:text-primary/20 transition-colors duration-500 rotate-12" />
          
          {/* Badge positioned at top right */}
          <Badge 
            variant={event.type === 'Online' ? 'secondary' : 'default'} 
            className="absolute top-4 right-4 whitespace-nowrap text-[10px] font-bold uppercase tracking-wider z-10"
          >
            {event.type}
          </Badge>
          
          {/* Icon and Title - with right padding to avoid badge */}
          <div className="flex items-start gap-3 relative z-10 pr-20">
            <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300 flex-shrink-0">
              <Icon className="w-5 h-5 text-primary group-hover:text-secondary transition-colors duration-300" />
            </div>
            <CardTitle className="font-display text-sm tracking-widest uppercase text-primary group-hover:text-secondary transition-colors duration-300 leading-tight pt-1">
              {event.name}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex-grow pt-2">
          <p className="text-sm text-foreground/75 font-body leading-relaxed italic">
            "{event.tagline}"
          </p>
        </CardContent>
      </Card>
    </button>
  );
}
