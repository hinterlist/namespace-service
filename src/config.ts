import { IConfig } from './config.interface';

const config: IConfig = {
  server: {
    port: parseInt(process.env.SERVER_PORT!, 10),
  },
  redis: {
    host: process.env.REDIS_HOST!,
    port: parseInt(process.env.REDIS_PORT!, 10),
  },
};

export default config;
