import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig'; // Özelleştirilmiş axios yapılandırması

function ProfileEdit() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get('/api/users/me', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      setUser(response.data);
      setUsername(response.data.username);
      setBio(response.data.bio);
    })
    .catch(error => console.error('Kullanıcı bilgilerini yükleme hatası:', error));
  }, [token]);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    axios.put('/api/users/me', { username, bio }, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      setUser(response.data);
      alert('Profil başarıyla güncellendi!');
    })
    .catch(error => console.error('Profil güncelleme hatası:', error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Profil Güncelle</h1>
      <form onSubmit={handleProfileUpdate} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Kullanıcı Adı</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Biyografi</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Güncelle</button>
      </form>
    </div>
  );
}

export default ProfileEdit;
