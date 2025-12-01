import Image from 'next/image';
import Link from 'next/link';
import { heroContent } from '@/lib/event-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import CountdownTimer from '@/components/shared/CountdownTimer';
import Section from '@/components/shared/Section';
import { Calendar, MapPin } from 'lucide-react';
import EmberBackground from '@/components/shared/EmberBackground';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');

  return (
    <Section id="home" className="pt-16 pb-16 md:pt-24 md:pb-24 bg-accent/50 relative overflow-hidden">
        <EmberBackground />
        <div className="absolute inset-0 bg-[url('/flame-pattern.svg')] bg-repeat opacity-[0.03]"></div>
        <div className="container relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h1 className="text-5xl lg:text-7xl font-bold font-headline text-primary tracking-tight">
                        {heroContent.title}
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-foreground/80 font-bold">
                        {heroContent.subtitle}
                    </p>
                    <p className="mt-2 max-w-xl text-base md:text-lg text-foreground/70">
                        {heroContent.tagline}
                    </p>

                    <div className="mt-8 space-y-3 text-sm text-foreground/80">
                        <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-secondary" />
                            <span className="font-semibold">{heroContent.date}</span>
                        </div>
                         <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-secondary" />
                            <span className="font-semibold">{heroContent.venue}</span>
                        </div>
                    </div>

                    <CountdownTimer targetDate={heroContent.eventDate} />

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <Button asChild size="lg" className="font-bold">
                            <Link href={heroContent.ctaPrimary.href}>{heroContent.ctaPrimary.text}</Link>
                        </Button>
                        <Button asChild size="lg" variant="secondary" className="font-bold">
                            <a href={heroContent.ctaSecondary.href} download>{heroContent.ctaSecondary.text}</a>
                        </Button>
                    </div>
                </div>
                <div className="hidden md:flex justify-center items-center">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt={heroImage.description}
                            width={500}
                            height={500}
                            className="rounded-lg shadow-xl object-cover"
                            data-ai-hint={heroImage.imageHint}
                        />
                    )}
                </div>
            </div>
      </div>
    </Section>
  );
}
