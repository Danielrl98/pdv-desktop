import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { Logger } from '../../../domain/libs';

@Module({
  imports: [],
  controllers: [CompanyController],
  providers: [ CompanyService, Logger],
  exports: [],
})
export class CompanyModule {}
