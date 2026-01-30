import Section from '@/components/shared/Section';
import { themeContent } from '@/lib/event-data';
import { Card, CardContent } from '@/components/ui/card';
import { Flame } from 'lucide-react';

export default function ThemeSection() {
  return (
    <Section id="theme" className="bg-muted/50">
      <div className="text-center max-w-3xl mx-auto relative">
        <Flame className="absolute -top-4 left-1/2 -translate-x-1/2 h-24 w-24 text-primary/10" />
        <div className="flex items-center justify-center mr-8">
            <span className="whitespace-nowrap text-[125%] md:text-[142%] font-medium text-gray-400 rotate-[-90deg] origin-center -mr-8">
              THEME
            </span>
            <span className="w-px h-16 md:h-20 bg-gray-400 mx-6 flex-shrink-0" />
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
              {themeContent.title}
            </h2>
        </div>
        <p className="mt-2 text-lg text-foreground/70 font-semibold">{themeContent.translation}</p>
        <p className="mt-2 text-lg text-foreground/70 italic">{themeContent.subtitle}</p>

        <p className="mt-6 text-foreground/80 leading-relaxed">
          {themeContent.explanation}
        </p>
        <p className="mt-4 text-foreground/80 leading-relaxed">
          {themeContent.connection}
        </p>

        <Card className="mt-8 border-primary/50 max-w-2xl mx-auto shadow-md">
          <CardContent className="p-6">
            <blockquote className="text-xl italic font-serif text-primary whitespace-pre-line">
              {themeContent.verse.text}
            </blockquote>
            <p className="mt-4 text-right text-sm text-foreground/60">— {themeContent.verse.reference}</p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
