import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import './db';

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import logsApiRouter from './routes/api/log';
import projectssApiRouter from './routes/api/project';
import taksApiRouter from './routes/api/task';
import usersApiRouter from './routes/api/user';

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/api/logs', logsApiRouter);
app.use('/api/projects', projectssApiRouter);
app.use('/api/taks', taksApiRouter);
app.use('/api/users', usersApiRouter);

export default app;
