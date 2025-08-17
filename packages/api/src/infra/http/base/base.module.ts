import { Module } from '@nestjs/common';
import { BaseController } from './base.controller';
import { BaseService } from './base.service';

export const providers = {
  appService: BaseService,
};

@Module({
  imports: [],
  controllers: [BaseController],
  providers: Object.values(providers),
})
export class BaseModule {}
