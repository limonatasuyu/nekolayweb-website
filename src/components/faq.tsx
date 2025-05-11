import { useState } from 'react';

const ChevronDown = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <title>Chevron Down</title>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

function ToggleQuestion() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);

  return (
    <div
      className="flex flex-col items-center justify-between border rounded-md px-4 py-2 text-sm cursor-pointer transition-all duration-200 border-gray-300"
      onClick={handleToggle}
      onKeyDown={handleToggle}
    >
      <div className="flex justify-between gap-2 w-full">
        <span className="text-gray-600">
          Website kurulumu gerçekten <strong>6.500₺</strong> mi?
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            open ? "rotate-180 text-green-500" : "rotate-0 text-gray-400"
          }`}
        />
      </div>
      {open && (
        <div className="mt-4 w-full text-gray-600">
          <p>Evet</p>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold mt-8 mb-4">
          Sıkça Sorulan
          <br />
          Sorular
        </h2>
      </div>
      <div className="flex flex-col gap-4 mb-8 mt-12">
        {[1, 2, 3].map((item) => (
          <ToggleQuestion key={item} />
        ))}
      </div>
    </>
  );
}
