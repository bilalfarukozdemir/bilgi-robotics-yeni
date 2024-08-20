import React, { useState } from 'react';
import axios from '../axiosConfig';

function Post({ post }) {
  const [likes, setLikes] = useState(post.likes.length);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState(post.comments);

  const handleLike = () => {
    axios.post(`/api/posts/${post._id}/like`)
      .then(response => setLikes(likes + 1))
      .catch(error => console.error('Beğeni hatası:', error));
  };

  const handleComment = (e) => {
    e.preventDefault();
    axios.post(`/api/posts/${post._id}/comments`, { text: commentText })
      .then(response => {
        setComments(response.data.comments);
        setCommentText('');
      })
      .catch(error => console.error('Yorum ekleme hatası:', error));
  };

  return (
    <div className="mb-4 p-4 border rounded">
      <p>{post.content}</p>
      <span className="text-gray-500">Beğeniler: {likes}</span>
      <button onClick={handleLike} className="ml-4 bg-blue-500 text-white py-1 px-2 rounded">Beğen</button>
      <div className="mt-4">
        <h4 className="font-bold">Yorumlar:</h4>
        <ul>
          {comments.map((comment, index) => (
            <li key={index} className="mb-2">{comment.text}</li>
          ))}
        </ul>
        <form onSubmit={handleComment}>
          <textarea
            className="w-full px-3 py-2 border rounded"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Yorumunuzu buraya yazın"
          ></textarea>
          <button type="submit" className="mt-2 bg-blue-500 text-white py-1 px-2 rounded">Yorum Yap</button>
        </form>
      </div>
    </div>
  );
}

export default Post;
