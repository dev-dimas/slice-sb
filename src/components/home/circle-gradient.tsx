import { cn } from '@/lib/utils';

export default function CircleGradient({ side, className }: { side: 'top' | 'right'; className?: string }) {
  return (
    <div
      className={cn(
        'w-full h-auto overflow-x-hidden absolute blur-3xl -z-10',
        side === 'top' && '-top-[10%]',
        side === 'right' && 'right-0 -mx-8 blur-xl',
        className
      )}
    >
      <div
        className={cn(
          'w-[125%] aspect-square bg-[#050091]/70 rounded-full relative left-1/2',
          side === 'top' && '-translate-x-1/2',
          side === 'right' && '-translate-x-[5%]'
        )}
      ></div>
    </div>
  );
}
