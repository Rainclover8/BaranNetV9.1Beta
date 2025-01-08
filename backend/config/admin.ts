export default ({ env }: { env: (key: string, defaultValue?: any) => any }) => {
  const bool = (key: string, defaultValue: boolean): boolean => {
    const value = env(key);
    return value === undefined ? defaultValue : value === 'true';
  };

  return {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    apiToken: {
      salt: env('API_TOKEN_SALT'),
    },
    transfer: {
      token: {
        salt: env('TRANSFER_TOKEN_SALT'),
      },
    },
    flags: {
      nps: bool('FLAG_NPS', true),
      promoteEE: bool('FLAG_PROMOTE_EE', true),
    },
  };
};
