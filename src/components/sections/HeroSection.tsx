import Image from 'next/image';
import Link from 'next/link';
import { heroContent } from '@/lib/event-data';
import { Button } from '@/components/ui/button';
import CountdownTimer from '@/components/shared/CountdownTimer';
import Section from '@/components/shared/Section';
import { Calendar, MapPin } from 'lucide-react';
import EmberBackground from '@/components/shared/EmberBackground';

export default function HeroSection() {

  return (
    <Section id="home" className="pt-8 pb-8 md:pt-12 md:pb-12 relative overflow-hidden">
        <EmberBackground className="opacity-50" />
        <div className="container relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                {/* Text Content */}
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-5xl lg:text-7xl font-bold font-headline text-primary tracking-tight">
                        {heroContent.title}
                    </h1>
                    <p className="mt-3 text-lg md:text-xl text-foreground/80 font-bold">
                        {heroContent.subtitle}
                    </p>
                    <p className="mt-1 max-w-xl text-base md:text-lg text-foreground/70">
                        {heroContent.tagline}
                    </p>

                    <div className="mt-6 space-y-2 text-sm text-foreground/80">
                        <div className="flex items-center justify-center gap-3">
                            <Calendar className="w-5 h-5 text-secondary" />
                            <span className="font-semibold">{heroContent.date}</span>
                        </div>
                        <div className="flex items-center justify-center gap-3">
                            <MapPin className="w-5 h-5 text-secondary" />
                            <span className="font-semibold">{heroContent.venue}</span>
                        </div>
                    </div>

                    <CountdownTimer targetDate={heroContent.eventDate} />

                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                        <Button asChild size="lg" className="font-bold">
                            <Link href={heroContent.ctaPrimary.href}>{heroContent.ctaPrimary.text}</Link>
                        </Button>
                    </div>
                </div>
                
                {/* Church Image */}
                <div className="hidden md:flex justify-center items-center relative">
                    {/* Ambient glow layers */}
                    <div className="absolute inset-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse m-auto"></div>
                    <div className="absolute inset-0 w-64 h-64 bg-secondary/15 rounded-full blur-[80px] m-auto"></div>
                    
                    {/* Church image */}
                    <div className="relative animate-[float_6s_ease-in-out_infinite]">
                        <Image
                            src="/cjc.png"
                            alt="CSI Church of Jesus Christ"
                            width={500}
                            height={500}
                            className="object-contain"
                            style={{
                                filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 80px rgba(255, 107, 53, 0.15))'
                            }}
                            priority
                        />
                    </div>
                </div>
            </div>
      </div>
    </Section>
  );
}
