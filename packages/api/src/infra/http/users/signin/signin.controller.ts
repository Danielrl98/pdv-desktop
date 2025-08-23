import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { SigninService } from './signin.service';
import { Logger } from '../../../../domain/libs';
import { getConfigEnv } from '../../../config';
import { ISignin, SigninDto } from './signin.dto';

@Controller('signin')
export class SigninController {
  constructor(
    private readonly service: SigninService,
    private readonly logger: Logger,
  ) {
    const enviroment = getConfigEnv('NODE_ENV');
    this.logger.register('Signin', enviroment);
  }

  @Post()
  signin(@Body() body: ISignin) {
    const valid = SigninDto.safeParse(body);

    if (valid.error) {
      this.logger.error(valid.error.message);
      throw new BadRequestException({
        message: 'Campos inválidos',
        errors: valid.error.issues,
      });
    }

    return this.service.signin(body, this.logger);
  }
}
