import express, { Express } from 'express';

import * as adminRoutes from './admin.routes';
import * as categoryRoutes from './category.routes';
import * as bookRoutes from './book.routes';

import appError from '../utils/errorHelper';
import { ErrorType } from '../utils/errorTypes';

export function initRoutes(app: Express) {
  app.use('/api/v1/admin', adminRoutes.initRoutes(app, express.Router()));
  app.use('/api/v1/category', categoryRoutes.initRoutes(app, express.Router()));
  app.use('/api/v1/book', bookRoutes.initRoutes(app, express.Router()));
  app.get('/', (req, res) =>
    res.status(200).send({ message: 'Welcome to SARVADHI world!!' })
  );
  app.use('*', (req, res, next) => {
    try {
      throw new appError('path not found', ErrorType.not_found);
    } catch (error) {
      next(error);
    }
  });
}
