import React from 'react';

export const ContactForm = () => {
  return (
    <div className="mt-10 bg-[#F9F9F9] rounded-xl p-6 max-w-xl mx-auto flex flex-col justify-center items-center py-24">
      <h2 className="text-lg font-semibold text-gray-900 mb-1">Detaylı bilgi için sizi arayalım!</h2>
      <p className="text-sm text-gray-600 mb-4 flex items-center justify-center gap-2 border border-gray-300 w-fit p-2 rounded-md mt-4">
        <svg width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>Clock Icon</title>
          <path
            d="M12 7V12L14.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="#00FF27"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>{" "}
        7/24 yanınızdayız
      </p>
      <input type="text" placeholder="Ad" className="w-full px-3 py-2 mb-3 border border-gray-300 rounded" />
      <input type="text" placeholder="Soyad" className="w-full px-3 py-2 mb-3 border border-gray-300 rounded" />
      <input type="email" placeholder="E-Posta" className="w-full px-3 py-2 mb-3 border border-gray-300 rounded" />
      <input type="tel" placeholder="+90" className="w-full px-3 py-2 mb-3 border border-gray-300 rounded" />
      <div className="text-left text-xs mb-4">
        <label className="inline-flex items-start gap-2">
          <input type="checkbox" className="mt-1" />
          <span>Kullanıcı sözleşmesini okudum, onaylıyorum.</span>
        </label>
      </div>
      <button type="button" className="w-fit px-4 py-3 bg-black text-[#00FF27] font-semibold rounded-md">
        Gönder
      </button>
    </div>
  );
};