import { z } from 'zod';

export const SignupDto = z.object({
  nome_empresa: z.string(),
  documento_empresa: z.string(),
  email: z.email(),
  senha: z.string(),
  debug: z.boolean()
});

export type ISignup = z.infer<typeof SignupDto>;
