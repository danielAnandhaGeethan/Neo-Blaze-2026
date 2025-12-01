import { Flame } from 'lucide-react';
import { footerContent } from '@/lib/event-data';

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="flex items-center gap-2">
          <Flame className="h-5 w-5 text-primary" />
          <p className="text-sm font-bold font-headline">Neo Blaze 2026</p>
        </div>
        <div className="flex flex-col md:items-end gap-2">
          <p className="text-sm text-muted-foreground">{footerContent.hostedBy}</p>
          <p className="text-xs text-muted-foreground max-w-md">{footerContent.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
