import React, { useState, useEffect } from 'react';
import axios from './axiosConfig';
import Post from './Post';

function SocialFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Postları yükleme hatası:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Sosyal Medya Akışı</h1>
      <div className="space-y-4">
        {posts.map(post => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default SocialFeed;
