import express from 'express';
import { NewIdController } from './controllers';
import { logger, redis } from './providers';
import config from './config';

const app = express();
const port = config.server.port;

// Define app routes
app.get('/newId/:namespace([a-z]{1,10})', NewIdController);

setTimeout(() => {
  app.listen(port, () => {
    logger.info(`🚀 Server ready at http://www.localhost:${port}`);
  });
}, 1000);
