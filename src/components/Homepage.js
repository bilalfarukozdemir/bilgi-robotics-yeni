import React from "react";
import { Link } from 'react-router-dom';


function Homepage() {
  return (
    <div className="container mx-auto p-4">
      <section className="text-center my-8">
        <h1 className="text-4xl font-bold">Bilgi Robotics</h1>
        <p className="mt-4">Teknofest Hyperloop projesine sponsor olun!</p>
        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded">
          Bize Sponsor Olun
        </button>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold">Ekibimiz</h2>
        <div className="flex flex-wrap justify-around mt-4">
          {/* Fotoğraflar ve biyografiler burada yer alacak */}
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold">Haftalık Haberler</h2>
        <div>{/* Haberler ve güncellemeler burada yer alacak */}</div>
      </section>

      <section className="my-8">
        <button className="bg-green-500 text-white py-2 px-4 rounded">
          Login
        </button>
        <button className="ml-4 bg-green-500 text-white py-2 px-4 rounded">
          Kayıt Ol
        </button>
      </section>

      <section className="text-center my-8">
        <h1 className="text-4xl font-bold">Bilgi Robotics</h1>
        <p className="mt-4">Teknofest Hyperloop projesine sponsor olun!</p>
        <Link to="/profileedit">
          <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded">
            Bize Ulaşın
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Homepage;
