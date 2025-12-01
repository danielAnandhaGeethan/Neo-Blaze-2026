import Section from '@/components/shared/Section';
import { aboutContent } from '@/lib/event-data';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

export default function AboutSection() {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
            {aboutContent.title}
          </h2>
          {aboutContent.paragraphs.map((p, i) => (
            <p key={i} className="text-foreground/80 leading-relaxed">
              {p}
            </p>
          ))}
          <Badge variant="secondary" className="text-base font-bold py-1 px-3">
            Age Group: {aboutContent.ageGroup}
          </Badge>
        </div>
        <div className="bg-accent/50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold font-headline text-primary mb-4">
            What You Can Expect
          </h3>
          <ul className="space-y-3">
            {aboutContent.expectations.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span className="text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
