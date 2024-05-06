import Calendar from '@/components/home/calendar';
import CircleGradient from '@/components/home/circle-gradient';
import Clock from '@/components/home/clock';
import NftSpecta from '@/components/home/nft-specta';
import TokenInformation from '@/components/home/token-information';

export default function Home() {
  return (
    <div className="w-full min-h-full bg-[url('/star.png')] bg-contain bg-repeat-y relative max-w-[425px] mx-auto">
      <CircleGradient side="top" />
      <main className="container py-20">
        <div className="relative z-10 flex flex-col items-center justify-center w-full gap-2 mb-20 text-3xl sm:text-4xl">
          <h1>ICO #1</h1>
          <span>SpectaBot Token</span>
        </div>
        <Clock />
        <div className="bg-[#02002D] p-3 rounded-lg flex flex-col justify-center items-center mt-9 gap-5">
          <Calendar
            start={{
              date: '24',
              month: '03',
              year: '2024',
            }}
            end={{
              date: '30',
              month: '04',
              year: '2024',
            }}
            highlightDot={{
              date: '24',
              month: '03',
              year: '2024',
            }}
            highlightStart={{
              date: '24',
              month: '03',
              year: '2024',
            }}
            highlightEnd={{
              date: '07',
              month: '04',
              year: '2024',
            }}
          />
        </div>
        <TokenInformation />
        <div className="relative flex flex-col gap-9 mt-9 pb-36">
          <CircleGradient side="right" className="-top-10" />
          <NftSpecta variant="silver" />
          <NftSpecta variant="gold" />
          <NftSpecta variant="platinum" />
          <CircleGradient side="right" className="bottom-40" />
        </div>
        <div className="absolute w-full h-full bg-[url('/wavy.png')] bg-contain bg-no-repeat bg-bottom bottom-0 -z-10 -mx-8"></div>
      </main>
    </div>
  );
}
