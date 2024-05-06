import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export default function Clock() {
  const [time, setTime] = useState<string>('--:--:--');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = dayjs();
      setTime(now.format('HH:mm:ss'));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <span className="inline-block w-full text-5xl text-center">{time}</span>;
}
