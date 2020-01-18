/**
 * The connector for redis server
 */
import Redis from 'ioredis';

import logger from './logger';
import config from '../config';

// Default redis provider
const redis = new Redis(config.redis.port, config.redis.host);
redis.on('ready', () => {
  logger.info(
    `🔌 Successfully connected to Redis at ${config.redis.host}:${config.redis.port}`
  );
});

export default redis;
