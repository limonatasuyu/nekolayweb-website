import React from "react";
import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <div className="inline-block text-sm px-4 py-2 rounded-sm mb-4 border border-gray-300">
        <strong>NeKolayWeb&apos;te</strong> alan adı masrafı yok! 💸
      </div>
      <h1 className="text-xl font-semibold text-gray-900 mb-2">
        Website Kurulumu
        <br />
        Sadece 6.500₺
      </h1>
      <p className="text-gray-800 mb-6 leading-relaxed">
        NeKolayWeb altyapısıyla <br />
        siteniz 3 iş gününde yayında. <br />
        Hem de hiçbir ek masraf
        <br />
        olmadan!
      </p>
      <div className="flex items-center justify-center mt-4">
        <Image src="/home-image.png" alt="Website" width={500} height={300} />
      </div>
      <div className="mt-8">
        <p className="text-gray-700 text-base leading-relaxed mt-4 max-w-md mx-auto">
          NeKolayWeb, dijital dünyada yerini almak isteyen
          <br />
          küçük ve orta ölçekli işletmelere, bütçe dostu
          <br />
          website altyapı çözümleri sunar.
        </p>
      </div>
    </>
  );
};
