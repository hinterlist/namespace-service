import { redis } from '../providers';
import { Request, Response } from 'express';

const handler = async (req: Request, res: Response) => {
  const namespace = req.params.namespace;
  const nextId = await redis.incr(namespace);

  res.send(`${namespace}-${nextId}`);
};

export default handler;
