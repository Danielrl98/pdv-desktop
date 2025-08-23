import { Module } from '@nestjs/common';
import { SigninController } from './signin.controller';
import { SigninService } from './signin.service';
import { Logger } from '../../../../domain/libs';

@Module({
  imports: [],
  controllers: [SigninController],
  providers: [SigninService, Logger],
  exports: [],
})
export class SigninModule {}
