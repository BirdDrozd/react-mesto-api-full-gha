const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate')
const cardRouter = require('./routes/cards');
const userRouter = require('./routes/users');
const { auth } = require('./middlewares/auth');
const { NotFoundError } = require('./errors/NotFoundError');
const { login, createUser } = require('./controllers/users');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { signupValidation, signinValidation } = require('./middlewares/validation');


const {
  PORT = 3000,
  DB_URL = 'mongodb://127.0.0.1:27017/mestodb',
} = process.env;

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Ошибка подключения к MongoDB:', error);
});

db.once('open', () => {
  console.log('Успешное подключение к MongoDB');
});

const app = express();

app.use(cors({
  origin: [
    'http://localhost:3001',
    'https://localhost:3001',
    'http://interactiveservice.nomoredomainsrocks.ru',
    'https://interactiveservice.nomoredomainsrocks.ru',
    'https://api.interactiveservice.nomoredomainsrocks.ru'],
}));


app.use(helmet());
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.json());

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});


app.use(requestLogger);

app.post('/signin', signinValidation, login);

app.post('/signup', signupValidation, createUser);

app.use(auth);
app.use('/users', userRouter);
app.use('/cards', cardRouter);

app.use(errorLogger);

app.use(errors());

app.use((req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

const errorHandler = require('./middlewares/error-handler');

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
