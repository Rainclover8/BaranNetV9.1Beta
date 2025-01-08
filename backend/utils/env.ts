export const parseEnv = (env: (key: string, defaultValue?: any) => any) => ({
    int: (key: string, defaultValue?: number) => {
      const value = env(key);
      return value !== undefined ? parseInt(value, 10) : defaultValue;
    },
    bool: (key: string, defaultValue?: boolean) => {
      const value = env(key);
      return value !== undefined ? value === 'true' : defaultValue;
    },
  });
  