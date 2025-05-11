import React from 'react';

export const CTAButtons = () => {
  return (
    <div className='mt-10 w-full'>
      <button
        type="button"
        className="block w-full max-w-xs mx-auto mb-2 px-4 py-3 text-[#00FF27] bg-[#001D04] rounded-lg text-base"
      >
        Markanızı Dijitale Taşıyalım!
      </button>
      <button
        type="button"
        className="block w-full max-w-xs mx-auto px-4 py-3 bg-white text-black border border-gray-300 rounded-lg text-base"
      >
        Sizi Arayalım!
      </button>
    </div>
  );
};