import path from 'path';
import { envHelper } from '../utils/envHelper';

export default ({ env }: { env: (key: string, defaultValue?: any) => any }) => {
  const { int, bool } = envHelper(env);

  const client = env('DATABASE_CLIENT', 'sqlite') as 'mysql' | 'sqlite'; // Tür tanımlaması yapıldı

  const connections = {
    mysql: {
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: bool('DATABASE_SSL', false) && {
          rejectUnauthorized: bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
      },
    },
    sqlite: {
      connection: {
        filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client], // Artık TypeScript bu satırı anlayabilir
    },
  };
};
