import { capitalizeFirstChar, cn } from '@/lib/utils';
import { Link } from '@/router';

type TVariantsDetail = {
  priceRateInit: number;
  initPrice: number;
  mintingSpectaBot: number;
  lockedForStake: number;
  stakingBonus: number;
  freeAirDrop: number;
};

type VariantType = 'silver' | 'gold' | 'platinum';

export default function NftSpecta({ variant }: { variant: VariantType }) {
  const variantsDetail: Record<VariantType, TVariantsDetail> = {
    silver: {
      priceRateInit: 0.5,
      initPrice: 500,
      mintingSpectaBot: 1000,
      lockedForStake: 60,
      stakingBonus: 300,
      freeAirDrop: 1,
    },
    gold: {
      priceRateInit: 0.48,
      initPrice: 1200,
      mintingSpectaBot: 2500,
      lockedForStake: 60,
      stakingBonus: 3400,
      freeAirDrop: 2,
    },
    platinum: {
      priceRateInit: 0.48,
      initPrice: 1200,
      mintingSpectaBot: 2500,
      lockedForStake: 60,
      stakingBonus: 3400,
      freeAirDrop: 2,
    },
  };

  function InformationDetail({ label, value }: { label: string; value: string }) {
    return (
      <div className="flex justify-between text-xs">
        <span
          className={cn(
            'flex-1 px-2 py-1 rounded-l-lg',
            variant === 'silver' && 'bg-[#96969A]',
            variant === 'gold' && 'bg-[#7A5F00]',
            variant === 'platinum' && 'bg-[#030147]'
          )}
        >
          {label}
        </span>
        <span
          className={cn(
            'px-2 py-1 rounded-r-lg',
            variant === 'silver' && 'bg-[#B2B4B6]',
            variant === 'gold' && 'bg-[#727401]',
            variant === 'platinum' && 'bg-[#0900B6]'
          )}
        >
          {value}
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'w-full flex flex-col rounded-2xl overflow-hidden',
        variant === 'silver' && 'bg-[#5E5C5C]',
        variant === 'gold' && 'bg-[#524A00]',
        variant === 'platinum' && 'bg-[#01001E]'
      )}
    >
      <div
        className={cn(
          'w-full flex justify-center py-2',
          variant === 'silver' && 'bg-[#A8A8A8]',
          variant === 'gold' && 'bg-[#B88F00]',
          variant === 'platinum' && 'bg-[#03014B]'
        )}
      >
        <span className="text-2xl">NFT Specta {capitalizeFirstChar(variant)}</span>
      </div>
      <div className="flex flex-col items-center px-5 py-4">
        <div className="flex flex-col w-full gap-1">
          <InformationDetail label="Price Rate Initialize" value={`${variantsDetail[variant].priceRateInit} USDT/ 1 STB`} />
          <InformationDetail label="Initial Price" value={`${variantsDetail[variant].initPrice} USDT`} />
          <InformationDetail label="Minting SpectaBot" value={`${variantsDetail[variant].mintingSpectaBot} STB (on 30d)`} />
          <InformationDetail label="Locked for Stake" value={`${variantsDetail[variant].lockedForStake} Day`} />
          <InformationDetail label="Staking Bonus" value={`${variantsDetail[variant].stakingBonus} STB`} />
          <InformationDetail label="Free AirDrop" value={`${variantsDetail[variant].freeAirDrop} AirDrop`} />
        </div>
        <span className="mt-5 mb-3 text-xs italic text-center cursor-pointer text-white/50 w-fit">View NFTs</span>
        <Link
          to={`/minting-${variant}`}
          className={cn(
            'text-lg py-1 text-center rounded-lg w-full',
            variant === 'silver' && 'bg-[#2B2828]',
            variant === 'gold' && 'bg-[#B88F00]',
            variant === 'platinum' && 'bg-[#050091]'
          )}
        >
          Start Minting
        </Link>
      </div>
    </div>
  );
}
