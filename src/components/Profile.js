import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig'; // Özelleştirilmiş axios yapılandırması

function Profile() {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    // Kullanıcı verilerini ve postları yükle
    axios.get('/api/users/me', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      setUser(response.data);
    })
    .catch(error => console.error('Kullanıcı bilgilerini yükleme hatası:', error));

    axios.get('/api/posts', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      setPosts(response.data);
    })
    .catch(error => console.error('Postları yükleme hatası:', error));
  }, [token]);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/posts', { content: newPost }, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      setPosts([...posts, response.data]);
      setNewPost('');
    })
    .catch(error => console.error('Post gönderme hatası:', error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Kullanıcı Profili</h1>
      <div className="flex justify-center">
        <img src={user.profilePicture || '/default-profile.png'} alt="Profile" className="rounded-full h-32 w-32"/>
      </div>
      <h2 className="text-2xl text-center mt-4">{user.username}</h2>
      <p className="text-center text-gray-700 mt-2">{user.bio}</p>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Yeni Post Oluştur</h3>
        <form onSubmit={handlePostSubmit} className="mb-8">
          <textarea
            className="w-full px-3 py-2 border rounded"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Post içeriğini buraya yazın"
          ></textarea>
          <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Gönder
          </button>
        </form>

        <h3 className="text-xl font-bold mb-4">Postlar</h3>
        {posts.map(post => (
          <div key={post._id} className="mb-4 p-4 border rounded">
            <p>{post.content}</p>
            <span className="text-gray-500">Yazar: {post.author.username}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
