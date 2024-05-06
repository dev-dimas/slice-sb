import { cn } from '@/lib/utils';
import dayjs from 'dayjs';
import 'dayjs/locale/id';

type TDate = {
  date: string;
  month: string;
  year: string;
};

type Props = {
  start: TDate;
  end: TDate;
  highlightDot: TDate;
  highlightStart: TDate;
  highlightEnd: TDate;
};

export default function Calendar({ start, end, highlightDot, highlightStart, highlightEnd }: Props) {
  dayjs.locale('id');

  const startDate = dayjs(`${start.year}-${start.month}-${start.date}`);
  const endDate = dayjs(`${end.year}-${end.month}-${end.date}`);
  const highlightDotDate = dayjs(`${highlightDot.year}-${highlightDot.month}-${highlightDot.date}`);
  const highlightStartDate = dayjs(`${highlightStart.year}-${highlightStart.month}-${highlightStart.date}`);
  const highlightEndDate = dayjs(`${highlightEnd.year}-${highlightEnd.month}-${highlightEnd.date}`);

  return (
    <>
      <span className="w-full font-extrabold text-center text-md">
        {highlightStartDate.format('DD MMMM YYYY')} - {highlightEndDate.format('DD MMMM YYYY')}
      </span>
      <div className="grid w-full grid-cols-7 gap-y-4">
        {Array.from({ length: startDate.day() }).map((_, index) => (
          <span key={`empty-day-${index}`}></span>
        ))}

        {Array.from({ length: endDate.diff(startDate, 'day') + 1 }).map((_, dayDiff) => {
          const date = startDate.add(dayDiff, 'day');
          const isHiglighted = date.isAfter(highlightStartDate.subtract(1, 'day')) && date.isBefore(highlightEndDate.add(1, 'day'));
          return (
            <div
              key={date.valueOf()}
              className={cn(
                'flex items-center justify-center relative',
                isHiglighted && 'text-white bg-[#0700FF] bg-opacity-50',
                date.day() === 0 && isHiglighted && 'rounded-l-xl',
                date.day() === 6 && isHiglighted && 'rounded-r-xl',
                date.isSame(highlightDotDate) && 'rounded-l-xl',
                date.isSame(highlightEndDate) && 'rounded-r-xl'
              )}
            >
              {date.isSame(highlightDotDate) && <span className="absolute bg-[#504CF9] h-[calc(100%+10px)] aspect-square rounded-full z-10"></span>}
              <span className={cn('text-center text-lg w-full z-10', isHiglighted ? 'text-white' : 'text-white/40')}>{date.date()}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
