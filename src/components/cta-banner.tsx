import Image from 'next/image';

export function CTABanner() {
  return (
    <div className="relative text-center">
      <div className="text-3xl absolute w-full h-full flex justify-center items-center text-white">
        <h2 className="bg-[#00FF27] text-[#001D04] p-1">İşini Dijitale Bugün Taşı</h2>
      </div>
      <Image 
        src="/isini-dijitale-tasi.jpg" 
        alt="Isini Dijitale Tasi" 
        width={500} 
        height={500} 
        className="rounded-lg" 
      />
    </div>
  );
}