const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Подключение к MongoDB (установите MongoDB локально или используйте MongoDB Atlas)
mongoose.connect('mongodb://localhost:27017/resumeDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB подключён'));

app.listen(3000, () => console.log('Сервер запущен на порту 3000'));