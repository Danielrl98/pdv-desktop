import { z } from 'zod';

export const SigninDto = z.object({
  email: z.email(),
  senha: z.string(),
});

export type ISignin = z.infer<typeof SigninDto>;
