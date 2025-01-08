export default ({ env }: { env: (key: string, defaultValue?: any) => any }) => ({
  host: env('HOST', '0.0.0.0'),
  port: parseInt(env('PORT', '1337'), 10), // env.int yerine parseInt kullanıyoruz
  app: {
    keys: (env('APP_KEYS', '') as string).split(','), // env.array yerine split kullanılıyor
  },
});
