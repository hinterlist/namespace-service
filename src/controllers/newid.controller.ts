import { redis, logger } from '../providers';
import { Request, Response } from 'express';

const handler = async (req: Request, res: Response) => {
  const namespace = req.params.namespace;
  const nextId = await redis.incr(namespace);
  const value = `${namespace}-${nextId}`;

  logger.info(`Generated new ID: ${value}`);

  res.send(value);
};

export default handler;
