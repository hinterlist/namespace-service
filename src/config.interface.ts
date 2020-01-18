export interface IServerConfig {
  port: number;
}

export interface IRedisConfig {
  host: string;
  port: number;
}

export interface IConfig {
  server: IServerConfig;
  redis: IRedisConfig;
}
