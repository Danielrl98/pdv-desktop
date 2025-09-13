 import { IpcMainInvokeEvent } from 'electron';
import { services } from '../../shared/libs/sdk';

class UserRouter {
  constructor() {}

  async login(
    event: IpcMainInvokeEvent,
    message: { email: string; password: string },
  ) {
    return { status: 200 };
    const { users } = await services.users();

    const response = await users.signin({
      email: message.email,
      senha: message.password,
    });

    return {
      ...message,
    };
  }
}

export const userRouter = new UserRouter();
