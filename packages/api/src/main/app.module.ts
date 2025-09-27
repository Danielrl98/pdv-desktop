import { Module } from '@nestjs/common';
import {
  CompanyModule,
  UsersModule,
  SignupModule,
  SigninModule,
} from '../infra/http/';


@Module({
  imports: [CompanyModule, UsersModule, SignupModule, SigninModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
