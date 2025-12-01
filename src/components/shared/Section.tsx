import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
  title?: string;
  titleClassName?: string;
};

export default function Section({ id, className, children, title, titleClassName }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      <div className="container">
        {title && (
          <h2 className={cn('text-3xl md:text-4xl font-headline font-bold text-primary mb-12 text-center', titleClassName)}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
