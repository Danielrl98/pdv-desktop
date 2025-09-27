import { IpcMainInvokeEvent } from 'electron';

class UserRouter {
  constructor() {}

  async login(
    event: IpcMainInvokeEvent,
    message: { email: string; password: string },
  ) {
    try {
      console.log('Login attempt:', message);
      return { success: true, message: 'Login realizado com sucesso' };
    } catch (error) {
      console.error('Erro no login:', error);

    }
  }
}

export const userRouter = new UserRouter();
