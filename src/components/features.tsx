import Image from "next/image";

export function Features() {
  return (
    <div className="bg-[#F9F9F9] px-4 py-12 max-w-2xl">
      {[
        {
          order: 1,
          image: "/features/sektore-uyumlu-tasarım.jpg",
          title: "Sektöre Uyumlu Tasarım",
          paragraph: "İşletmenizin alanına göre özel<br/>tasarımlar sunar.",
        },
        {
          order: 2,
          image: "/features/kullanici-dostu-yönetim-paneli.jpg",
          title: "Kullanıcı Dostu Yönetim Paneli",
          paragraph: "Teknik bilginiz olmasa bile kolayca<br/>sitenizi yönetebilirsiniz"
        },
        {
          order: 3,
          image: "/features/mobile-uyumlu-altyapi.jpg",
          title: "Mobil Uyumlu Altyapı",
          paragraph: "Web siteniz tüm cihazlarda<br/>kusursuz görünür.",
        },
        {
          order: 4,
          image: "/features/google-dostu-seo-altyapisi.jpg",
          title: "Google Dostu SEO Altyapısı",
          paragraph: "Arama motorlarında daha görünür<br/>olmanızı sağlar.",
        },
        {
          order: 5,
          image: "/features/güvenli-ve-modern-altyapi.jpg",
          title: "Güvenli ve Modern Altyapı",
          paragraph: "Tüm verileriniz güvenli sunucularda<br/>korunur.",
        },
      ].map((item) => (
        <div
          key={item.order}
          className="flex items-end gap-4 mb-4 mt-12 bg-white border border-gray-300 rounded-xl aspect-4/3"
        >
          <div className="flex flex-col rounded-xl px-12 text-white">
            <Image src={item.image} alt={item.title} width={500} height={500} />
            <h4 className="text-black font-bold text-xl mb-4">{item.title}</h4>
            {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
            <p className="text-gray-800 mb-4" dangerouslySetInnerHTML={{ __html: item.paragraph }} />
          </div>
        </div>
      ))}
    </div>
  );
}
