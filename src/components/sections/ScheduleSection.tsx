import Section from '@/components/shared/Section';
import { schedule } from '@/lib/event-data';

export default function ScheduleSection() {
  return (
    <Section id="schedule" title="Event Schedule">
      <div className="relative max-w-2xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-24 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
        
        <div className="space-y-12">
          {schedule.map((item, index) => (
            <div key={index} className="relative flex items-start gap-4 md:gap-8">
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-24 top-1 h-4 w-4 rounded-full bg-primary border-4 border-background -translate-x-1/2"></div>

              {/* Desktop Time */}
              <div className="hidden md:block w-20 text-right">
                <p className="font-bold text-primary text-lg">{item.time}</p>
              </div>
              
              {/* Content */}
              <div className="flex-1 pl-10 md:pl-0">
                {/* Mobile Time */}
                <p className="font-bold text-primary text-lg md:hidden mb-1">{item.time}</p>
                <p className="font-semibold text-lg text-foreground/90">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
