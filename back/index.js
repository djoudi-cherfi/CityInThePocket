import './loadEnv';

import express, { json, urlencoded } from 'express';

import cookieParser from 'cookie-parser';

import morgan from 'morgan';

import cors from 'cors';

import session from 'express-session';

import apiRouter from './app/router';

const app = express();

app.use(morgan('dev'));

app.use(cookieParser());

app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'Guess it !',
  cookie: {
    secure: false, // sans cet option, express-session nous force à être https
    maxAge: 1000 * 60 * 60 * 2, // 2 heures !
  },
}));

const protocol = process.env.URL_PROTOCOL_HTTP;
const host = process.env.URL_HOST_LOCALHOST;
const port_back = process.env.URL_PORT_BACK || 5555;
const port_front = process.env.URL_PORT_FRONT;
const version = process.env.URL_API_VERSION;

app.use(cors({
  origin: `${protocol}${host}:${port_front}`,
  credentials: true,
  // allowedHeaders:'Content-Type, x-requested-with, Authorization',
  methods: 'GET, POST, PUT, PATCH, POST, DELETE, OPTIONS',
}));

app.use(json());

app.use(urlencoded({ extended: true }));

app.use(version, apiRouter);

app.listen(port_back, () => console.log(`Server is running on ${protocol}${host}:${port_back}${version}`));
