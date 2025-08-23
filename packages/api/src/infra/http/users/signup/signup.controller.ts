import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { SignupService } from './signup.service';
import { Logger } from '../../../../domain/libs';
import { getConfigEnv } from '../../../config';
import { ISignup, SignupDto } from './signup.dto';

@Controller('signup')
export class SignupController {
  constructor(
    private readonly service: SignupService,
    private readonly logger: Logger,
  ) {
    const enviroment = getConfigEnv('NODE_ENV');
    this.logger.register('Signup', enviroment);
  }

  @Post()
  signup(@Body() body: ISignup) {
    const valid = SignupDto.safeParse(body);

    if (valid.error) {
      this.logger.error(valid.error.message);
      throw new BadRequestException({
        message: 'Campos inválidos',
        errors: valid.error.issues,
      });
    }

    return this.service.signup(valid.data, this.logger);
  }
}
