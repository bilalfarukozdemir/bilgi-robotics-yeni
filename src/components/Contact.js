import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">İletişim</h1>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Adınız</label>
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
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Gönder
        </button>
      </form>
      <div className="mt-8 text-center">
        <p className="text-gray-700">E-posta: bilgi@robotics.com</p>
        <p className="text-gray-700">Telefon: +90 123 456 7890</p>
        <p className="text-gray-700">Adres: Bilgi Üniversitesi, İstanbul</p>
      </div>
    </div>
  );
}

export default Contact;
