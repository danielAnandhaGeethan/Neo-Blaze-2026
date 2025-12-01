import Section from '@/components/shared/Section';
import { events } from '@/lib/event-data';
import EventCard from '@/components/shared/EventCard';

export default function EventsSection() {
  return (
    <Section id="events" title="Events Overview">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </Section>
  );
}
