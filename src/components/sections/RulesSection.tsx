'use client';

import { useState, useEffect, useCallback } from 'react';
import Section from '@/components/shared/Section';
import { eventRules, generalRules } from '@/lib/event-data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Info } from 'lucide-react';

export default function RulesSection() {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  const openAccordionItem = useCallback((eventId: string) => {
    const matchingRule = eventRules.find(rule => rule.id === eventId);
    if (matchingRule) {
      setOpenItem(eventId);
    }
  }, []);

  useEffect(() => {
    // Handle custom event from EventCard
    const handleOpenEventRule = (e: Event) => {
      const customEvent = e as CustomEvent<{ eventId: string }>;
      openAccordionItem(customEvent.detail.eventId);
    };

    // Check URL hash on mount
    const checkHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        openAccordionItem(hash);
      }
    };

    // Check on mount
    checkHash();

    // Listen for custom event and hash changes
    window.addEventListener('openEventRule', handleOpenEventRule);
    window.addEventListener('hashchange', checkHash);
    
    return () => {
      window.removeEventListener('openEventRule', handleOpenEventRule);
      window.removeEventListener('hashchange', checkHash);
    };
  }, [openAccordionItem]);

  return (
    <Section id="rules" className="bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-8 text-center">
          Detailed Event Rules
        </h2>
        <Accordion 
          type="single" 
          collapsible 
          className="w-full bg-card rounded-lg shadow-md"
          value={openItem}
          onValueChange={setOpenItem}
        >
          {eventRules.map((event) => (
            <AccordionItem value={event.id} key={event.id} id={event.id}>
              <AccordionTrigger className="text-lg font-headline px-6 hover:bg-accent/50">
                {event.title}
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <div className="pt-2 pb-4 space-y-4">
                  <p className="text-sm text-muted-foreground italic">{event.meta}</p>
                  <p className="text-foreground/80">{event.description}</p>
                  <ul className="space-y-2 list-disc pl-5">
                    {event.rules.map((rule, i) => (
                      <li key={i} className="text-foreground/80">{rule}</li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <Card className="mt-16 shadow-md">
            <CardHeader>
                <CardTitle className="text-left font-headline text-2xl text-primary">{generalRules.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {generalRules.rules.map((rule, i) => (
                    <div key={i} className="flex items-start gap-4 p-3 rounded-md bg-accent/30">
                        {rule.icon ? (
                            <AlertTriangle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        ) : (
                            <Info className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        )}
                        <div>
                            <h4 className="font-bold text-foreground">{rule.label}</h4>
                            <p className="text-sm text-foreground/80">{rule.content}</p>
                        </div>
                    </div>
                ))}
                 <p className="text-sm text-center text-muted-foreground pt-4 font-semibold italic">{generalRules.finalNote}</p>
            </CardContent>
        </Card>
      </div>
    </Section>
  );
}
