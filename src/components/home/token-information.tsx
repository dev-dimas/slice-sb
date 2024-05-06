export default function TokenInformation() {
  return (
    <div className="flex flex-col gap-5 mt-10">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p>Total Token for ICO :</p>
          <p className="text-[21px]">250.000 STB</p>
        </div>
        <div className="flex flex-col items-end">
          <p>Minting Process :</p>
          <p className="text-[21px]">30 Day</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p>Initial Price on ICO :</p>
          <p className="text-[21px]">0.4~0.5 USDT</p>
        </div>
        <div className="flex flex-col items-end">
          <p>Locked after Minting :</p>
          <p className="text-[21px]">60 Day</p>
        </div>
      </div>
    </div>
  );
}
