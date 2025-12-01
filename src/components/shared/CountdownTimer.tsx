'use client';

import { useState, useEffect } from 'react';

type CountdownTimerProps = {
  targetDate: string;
};

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<{
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  }>({});
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Set initial value
    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);
  
  if (!isMounted) {
    return (
        <div className="mt-8 grid grid-cols-4 gap-2 md:gap-4 text-center w-full max-w-sm">
            <div className="bg-primary/10 p-3 rounded-lg"><div className="text-2xl font-bold font-headline text-primary">-</div><div className="text-xs text-foreground/60">Days</div></div>
            <div className="bg-primary/10 p-3 rounded-lg"><div className="text-2xl font-bold font-headline text-primary">-</div><div className="text-xs text-foreground/60">Hours</div></div>
            <div className="bg-primary/10 p-3 rounded-lg"><div className="text-2xl font-bold font-headline text-primary">-</div><div className="text-xs text-foreground/60">Minutes</div></div>
            <div className="bg-primary/10 p-3 rounded-lg"><div className="text-2xl font-bold font-headline text-primary">-</div><div className="text-xs text-foreground/60">Seconds</div></div>
        </div>
    );
  }

  const timerComponents = Object.keys(timeLeft).length ? (
    Object.entries(timeLeft).map(([interval, value]) => (
      <div key={interval} className="bg-primary/10 p-3 rounded-lg">
        <div className="text-2xl lg:text-3xl font-bold font-headline text-primary">
          {value.toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-foreground/60 capitalize">{interval}</div>
      </div>
    ))
  ) : (
    <div className="col-span-4 text-center font-bold text-primary">The event has started!</div>
  );

  return (
    <div className="mt-8 grid grid-cols-4 gap-2 md:gap-4 text-center w-full max-w-sm">
      {timerComponents}
    </div>
  );
}
