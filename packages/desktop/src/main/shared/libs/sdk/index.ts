import { getSDKService, SigninService } from './imports';

export const services = {
  users: async () => {
    const users = await getSDKService(SigninService);

    return { users };
  },
};
