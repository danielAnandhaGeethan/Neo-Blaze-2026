import Section from '@/components/shared/Section';
import { schedule } from '@/lib/event-data';

export default function ScheduleSection() {
  return (
    <Section id="schedule" title="Event Schedule">
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 md:left-24 h-full w-0.5 bg-border"></div>
        <div className="space-y-12">
          {schedule.map((item, index) => (
            <div key={index} className="relative flex items-start gap-8">
              <div className="hidden md:flex flex-col items-center">
                <div className="w-48 text-right pr-8">
                  <p className="font-bold text-primary text-lg">{item.time}</p>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 md:left-24 h-4 w-4 rounded-full bg-primary border-4 border-background mt-1"></div>
              <div className="flex-1 pl-8 md:pl-0">
                <p className="font-bold text-primary text-lg md:hidden">{item.time}</p>
                <p className="font-semibold text-lg text-foreground/90">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
