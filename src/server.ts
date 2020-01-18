import express, { Request, Response, NextFunction } from 'express';
import { NewIdController } from './controllers';
import { logger, redis } from './providers';
import config from './config';

const app = express();

// Define app routes
app.get('/newId/:namespace([a-z]{1,10})', NewIdController);

setTimeout(() => {
  app.listen(config.server.port, () => {
    logger.info(
      `🚀 Server ready at http://www.localhost:${config.server.port}`
    );
  });
}, 1000);
