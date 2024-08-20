import React from 'react';

function Sponsor() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Bize Sponsor Olun</h1>
      <p className="text-lg mb-8">
        Sponsorluğunuz, kulübümüzün projelerini hayata geçirmesine yardımcı olacak.
      </p>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Firma Adı</label>
          <input type="text" className="w-full px-3 py-2 border rounded"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">E-posta</label>
          <input type="email" className="w-full px-3 py-2 border rounded"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mesajınız</label>
          <textarea className="w-full px-3 py-2 border rounded"></textarea>
        </div>
        <button className="bg-green-500 text-white py-2 px-4 rounded mt-4">
          Başvur
        </button>
      </form>
    </div>
  );
}

export default Sponsor;
