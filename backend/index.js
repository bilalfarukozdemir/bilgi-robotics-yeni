const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// MongoDB bağlantısı
mongoose.connect('mongodb://localhost:27017/bilgi-robotics', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB bağlantısı başarılı'))
  .catch(err => console.error('MongoDB bağlantı hatası:', err));

// Basit bir GET isteği
app.get('/', (req, res) => {
  res.send('Bilgi Robotics Backend');
});

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
