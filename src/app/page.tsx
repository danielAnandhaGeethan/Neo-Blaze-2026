import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ThemeSection from '@/components/sections/ThemeSection';
import EventsSection from '@/components/sections/EventsSection';
import RulesSection from '@/components/sections/RulesSection';
import ScheduleSection from '@/components/sections/ScheduleSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ThemeSection />
        <EventsSection />
        <RulesSection />
        <ScheduleSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
