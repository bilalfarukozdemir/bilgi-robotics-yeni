import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig'; // Özelleştirilmiş axios yapılandırması
import { useParams } from 'react-router-dom';

function UserProfile() {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const { userId } = useParams(); // URL parametresinden kullanıcı ID'sini al

  useEffect(() => {
    // Diğer kullanıcının profil verilerini ve postlarını yükle
    axios.get(`/api/users/${userId}`)
      .then(response => {
        setUser(response.data.user);
        setPosts(response.data.posts);
      })
      .catch(error => console.error('Kullanıcı bilgilerini yükleme hatası:', error));
  }, [userId]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">{user.username} Profili</h1>
      <div className="flex justify-center">
        <img src={user.profilePicture || '/default-profile.png'} alt="Profile" className="rounded-full h-32 w-32"/>
      </div>
      <h2 className="text-2xl text-center mt-4">{user.username}</h2>
      <p className="text-center text-gray-700 mt-2">{user.bio}</p>

      <div className="mt-8">
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

export default UserProfile;
