import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Logger } from '../../../domain/libs';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, Logger],
  exports: [],
})
export class UsersModule {}
