const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');

// Post beğenme
router.post('/:postId/like', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).send('Post bulunamadı');
    
    if (post.likes.includes(req.userId)) {
      return res.status(400).send('Zaten beğenilmiş');
    }
    post.likes.push(req.userId);
    await post.save();
    res.status(200).send(post);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Post yorum ekleme
router.post('/:postId/comments', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).send('Post bulunamadı');
    
    const comment = {
      user: req.userId,
      text: req.body.text,
      createdAt: new Date()
    };
    post.comments.push(comment);
    await post.save();
    res.status(200).send(post);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
