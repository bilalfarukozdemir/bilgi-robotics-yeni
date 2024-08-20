import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'; // Stil dosyanızı burada ekleyebilirsiniz

const Homepage = () => {
  return (
    <div className="homepage-container">
      <section className="about-us">
        <h1 className="text-4xl font-bold text-center mb-4">Bilgi Robotics</h1>
        <p className="text-lg text-center mb-6">
          Bilgi Robotics, Teknofest Hyperloop projesinde inovasyon ve mühendislik alanında öncü bir okul kulübüdür.
          Kulübümüz, genç yeteneklerin gelişimini desteklemeyi ve geleceğin ulaşım sistemlerini tasarlamayı hedefler.
        </p>
      </section>

      <section className="previous-work">
        <h2 className="text-3xl font-semibold mb-4">Önceki Çalışmalarımız ve Başarılarımız</h2>
        <ul className="list-disc pl-5">
          <li>2023 Teknofest Proje Finalisti</li>
          <li>Yerel Yarışmalarda 1. Ödül</li>
          <li>Topluluk Etkinlikleri ve Atölyeler</li>
        </ul>
      </section>

      <section className="our-team">
        <h2 className="text-3xl font-semibold mb-4">Ekibimiz</h2>
        <div className="team-members flex flex-wrap justify-center">
          <div className="team-member p-4">
            <img src="/team-member-1.jpg" alt="Team Member 1" className="w-24 h-24 rounded-full"/>
            <p className="text-center mt-2">Ahmet Yılmaz - Proje Lideri</p>
          </div>
          <div className="team-member p-4">
            <img src="/team-member-2.jpg" alt="Team Member 2" className="w-24 h-24 rounded-full"/>
            <p className="text-center mt-2">Ayşe Demir - Mühendis</p>
          </div>
        </div>
      </section>

      <section className="news-updates">
        <h2 className="text-3xl font-semibold mb-4">Haftalık Haberler ve Güncellemeler</h2>
        <p className="text-lg">
          Kulübümüzdeki son gelişmeleri ve projelerimizle ilgili haberleri buradan takip edebilirsiniz.
        </p>
      </section>

      <section className="sponsor-button text-center mt-8">
        <Link to="/sponsor" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Bize Sponsor Olun
        </Link>
      </section>

      <section className="auth-buttons text-center mt-8">
        <Link to="/login" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 mr-4">
          Giriş Yap
        </Link>
        <Link to="/register" className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-700">
          Kayıt Ol
        </Link>
      </section>
    </div>
  );
}

export default Homepage;
