'use client';

import moment from 'moment-timezone';
import { FC, useEffect, useState } from 'react';

interface LiveClockProps {
  timezone: string;
}

const LiveClock: FC<LiveClockProps> = ({ timezone }) => {
  const [time, setTime] = useState<string>(
    moment().tz(timezone).format('HH:mm:ss')
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().tz(timezone).format('HH:mm'));
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className='text-3xl font-semibold text-secondary-foreground'>
      {time ? (
        <div className='flex items-center justify-center gap-[0.5vw]'>
          <span>{timezone.split('/')[1]}</span>
          <span>:</span>
          <span>{time}</span>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default LiveClock;
