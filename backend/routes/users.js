const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// JWT Secret Key
const JWT_SECRET = 'your_jwt_secret_key';

// Kullanıcı kaydı
router.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      bio: req.body.bio,
    });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Kullanıcı girişi
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(401).send('Kullanıcı adı veya şifre yanlış');
    }
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Kullanıcı profil güncelleme
router.put('/me', async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).send('Kullanıcı bulunamadı');

    user.username = req.body.username || user.username;
    user.bio = req.body.bio || user.bio;
    // Profil fotoğrafı güncelleme işlevi ekleyebilirsiniz

    await user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});


module.exports = router;
