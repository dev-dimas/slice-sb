import { Link } from '@/router';
import { ReactNode } from 'react';
import CircleGradient from '../home/circle-gradient';

export default function LayoutMinting({ children, variant }: { children?: ReactNode; variant: 'silver' | 'gold' | 'platinum' }) {
  return (
    <div className="max-w-[425px] mx-auto">
      <header className="flex justify-between items-center bg-[#02002D] py-4 px-5">
        <Link to="/">
          <img src="/icon_maskot1.png" alt="Icon Maskot SpectaBot" className="w-10" />
        </Link>
        <button className="bg-[#020056] py-3 px-6 rounded-2xl font-extrabold">Connect Wallet</button>
      </header>
      <div className="relative">
        <div className="bg-[url('/specta-blur.png')] bg-contain bg-top w-full h-full absolute -top-16 -z-10 bg-no-repeat"></div>
        <CircleGradient side="top" className="top-0" />
        <main className="container mt-10 mb-16">
          <div className="bg-[#02002D] bg-opacity-75 rounded-xl px-5 pt-7 pb-5">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <p className="w-1/2">NFT Adress</p>
                <div className="flex justify-between w-1/2 gap-2 border-b border-b-white">
                  <span>:</span>
                  <span className="truncate">0xoikfgjldjhfbkk9c8AAb8F9D4A166f22d1aEafEC</span>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="w-1/2">Mainting Process</p>
                <div className="flex justify-between w-1/2 gap-2 border-b border-b-white">
                  <span>:</span>
                  <span className="truncate">29d 19:08:31</span>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="w-1/2">Minted Token</p>
                <div className="flex justify-between w-1/2 gap-2 border-b border-b-white">
                  <span>:</span>
                  <span className="truncate te">2,3508/1000STB</span>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="w-1/2">Locked Process</p>
                <div className="flex justify-between w-1/2 gap-2 border-b border-b-white">
                  <span>:</span>
                  <span className="truncate">Not Started</span>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="w-1/2">Stacked Profit</p>
                <div className="flex justify-between w-1/2 gap-2 border-b border-b-white">
                  <span>:</span>
                  <span className="truncate">0 STB</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-16">
              <p>Badge</p>
              <img src={`/nft-${variant}.png`} alt="Spectabot Badge" />
              <div className="flex justify-center gap-5">
                <button className="flex-1 p-3 rounded-xl bg-[#2CAC6D]">Claim Token</button>
                <button className="flex-1 p-3 rounded-xl bg-[#0900B6]">Claim Profit</button>
              </div>
            </div>
            {children}
          </div>
        </main>
        <div className="bg-[url('/wavy-2.png')] bg-contain bg-bottom w-full h-full absolute -bottom-16 -z-10 bg-no-repeat"></div>
      </div>
    </div>
  );
}
