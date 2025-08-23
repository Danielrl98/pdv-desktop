import { Module } from '@nestjs/common';
import { SignupController } from './signup.controller';
import { SignupService } from './signup.service';
import { Logger } from '../../../../domain/libs';

@Module({
  imports: [],
  controllers: [SignupController],
  providers: [SignupService, Logger],
  exports: [],
})
export class SignupModule {}
