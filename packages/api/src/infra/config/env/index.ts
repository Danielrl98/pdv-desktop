import 'dotenv/config';

const env = {
  NODE_ENV: process.env.NODE_ENV,
  LOG_LEVEL: process.env.LOG_LEVEL,
  SECRET_JWT: process.env.SECRET_JWT,
};

export function getConfigEnv(name: string) {
  if (!process.env[name]) {
    console.error(name + 'is required');
    process.exit(1);
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return env[name];
}
