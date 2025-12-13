import Image from 'next/image';
import { footerContent } from '@/lib/event-data';

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border/50">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="flex items-center gap-3">
          <Image 
            src="/image.png" 
            alt="Neo Blaze Logo" 
            width={49} 
            height={49}
            className="object-contain"
          />
          <p className="font-display font-semibold tracking-wide text-primary">NEO BLAZE 2026</p>
        </div>
        <div className="flex flex-col md:items-end gap-2">
          <p className="text-sm text-muted-foreground">{footerContent.hostedBy}</p>
          <p className="text-xs text-muted-foreground max-w-md">{footerContent.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
