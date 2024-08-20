import React, { useState } from 'react';

const CommentSection = ({ postId }) => {
  const [comment, setComment] = useState('');
  
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Burada yorumları backend'e göndermeyi unutmayın
    console.log(`Post ID: ${postId}, Comment: ${comment}`);
    setComment('');
  };

  return (
    <div className="comment-section">
      <h3 className="text-xl font-semibold mb-2">Yorumlar</h3>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          rows="4"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Yorum yapın..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded mt-2 hover:bg-blue-700"
        >
          Yorum Yap
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
