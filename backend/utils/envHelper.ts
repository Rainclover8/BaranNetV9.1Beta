export const envHelper = (env: (key: string, defaultValue?: any) => any) => ({
    int: (key: string, defaultValue?: number) => parseInt(env(key, defaultValue), 10),
    bool: (key: string, defaultValue?: boolean) => env(key, defaultValue) === 'true',
  });
  