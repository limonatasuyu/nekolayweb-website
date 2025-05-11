export function Steps() {
  const steps = [
    {
      order: 1,
      title: "Bize ulaşın",
      paragraph: "Sektörünüzü ve ne tür bir siteye<br/>ihtiyacınız olduğunu öğrenelim",
    },
    { order: 2, title: "Tasarımı Seçin", paragraph: "Şablonunuzu ve içeriklerinizi<br/>belirleyin." },
    { order: 3, title: "Yayına Alın", paragraph: "Siteniz 3 iş gününde yayında!" },
  ];

  return (
    <>
      <div className="mt-12">
        <h4 className="font-bold text-2xl">
          3 Adımda web sitenizi
          <br />
          kuruyoruz
        </h4>
      </div>
      <ol className="custom-list">
        {steps.map((item) => (
          <li key={item.order} className="flex flex-col items-center justify-center gap-4 py-8">
            <div className="border border-[#00FF27] border-[2px] border-b-[1px] p-4 w-fit text-[#00FF27] bg-[#001D04] aspect-square rounded-full font-bold text-[2rem]">
              {item.order}
            </div>
            <h5 className="text-xl font-bold">{item.title}</h5>
            {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
            <p className="text-gray-800" dangerouslySetInnerHTML={{ __html: item.paragraph }} />
          </li>
        ))}
      </ol>
    </>
  );
}
