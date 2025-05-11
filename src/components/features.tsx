export function Features() {
  return (
    <div className="bg-[#F9F9F9] px-4 py-12 max-w-2xl">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="flex items-end gap-4 mb-4 mt-12 bg-white border border-gray-300 rounded-xl aspect-4/3"
        >
          <div className="flex flex-col rounded-xl px-12 text-white">
            <h4 className="text-black font-bold text-xl mb-4">Kişiye özel tasarım!</h4>
            <p className="text-gray-800 mb-4">Tek tema değil, işinize özel modern tasarım.</p>
          </div>
        </div>
      ))}
    </div>
  );
}
