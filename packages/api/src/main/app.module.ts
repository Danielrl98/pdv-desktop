import { Module } from '@nestjs/common';
import { CompanyModule } from '../infra/http/';

@Module({
  imports: [CompanyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
