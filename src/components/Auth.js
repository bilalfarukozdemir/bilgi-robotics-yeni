import React, { useState } from 'react';
import axios from 'axios';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/users/login', { email, password })
      .then(response => {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
      })
      .catch(error => console.error('Giriş hatası:', error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Giriş Yap</h1>
      <form onSubmit={handleLogin} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">E-posta</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Şifre</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Giriş Yap</button>
      </form>
      {token && <p className="mt-4">Giriş Başarılı! Token: {token}</p>}
    </div>
  );
}

export default Auth;
