import Section from '@/components/shared/Section';
import { contactInfo } from '@/lib/event-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <Section id="contact" className="bg-muted/50">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
            Venue & Contact
          </h2>
          
          <Card className="bg-background">
            <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-secondary" />
                    Venue
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="font-bold">{contactInfo.venue.name}</p>
                <p className="text-foreground/80 whitespace-pre-line">{contactInfo.venue.address}</p>
                <Button asChild className="mt-4 font-bold" size="sm">
                    <a href={contactInfo.venue.mapUrl} target="_blank" rel="noopener noreferrer">
                        Open in Google Maps
                    </a>
                </Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
            <Card className="bg-background">
                <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-2">
                        <Phone className="h-6 w-6 text-secondary" />
                        {contactInfo.organizers.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <p className='text-sm text-muted-foreground'>For any queries, please contact:</p>
                    <div className="grid grid-cols-2 gap-3">
                        {contactInfo.organizers.list.map((organizer) => (
                            <div key={organizer.name}>
                                <p className="font-semibold">{organizer.name}</p>
                                <p className="text-sm text-foreground/80">{organizer.phone}</p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-background">
                 <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-2">
                        <Mail className="h-6 w-6 text-secondary" />
                        Email
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <a href={`mailto:${contactInfo.organizers.email}`} className="font-semibold text-primary hover:underline">
                        {contactInfo.organizers.email}
                    </a>
                     <p className='text-sm text-muted-foreground mt-1'>For online event submissions and official communication.</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </Section>
  );
}
