import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { events as TEvents } from '@/lib/event-data';
import { ArrowDownCircle } from 'lucide-react';

type EventCardProps = {
  event: (typeof TEvents)[number];
};

export default function EventCard({ event }: EventCardProps) {
  return (
    //href={`./#${event.id}`}
    <Link href="" className="group block h-full" scroll={false}>
      <Card className="h-full flex flex-col transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:border-primary/50">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="font-headline text-xl text-primary group-hover:text-primary/80">
              {event.name}
            </CardTitle>
            <Badge variant={event.type === 'Online' ? 'secondary' : 'default'} className="whitespace-nowrap">
              {event.type}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between">
          <p className="text-sm text-foreground/70">{event.tagline}</p>
          <div className="mt-4 flex items-center justify-end text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
            {/* View Rules <ArrowDownCircle className="ml-2 h-4 w-4" /> */}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
