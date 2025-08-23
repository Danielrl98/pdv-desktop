import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from '../../../domain/schema';
import { Logger } from '../../../domain/libs';
import { getConfigEnv } from '../../config';

@Controller('users')
export class UsersController {
  constructor(
    private readonly service: UsersService,
    private readonly logger: Logger,
  ) {
    const enviroment = getConfigEnv('NODE_ENV');
    this.logger.register('Users', enviroment);
  }

  @Post('create')
  async create(@Body() body: IUser) {
    const res = await this.service.create(body);
    return res;
  }

  @Get('read')
  async read(
    @Query()
    query: any,
  ) {
    console.log(query);

    try {
      const res = await this.service.findMany(query.filter, query.pagination);
      return res;
    } catch (error) {
      this.logger.error(error?.message);
    }
    return {
      data: [],
    };
  }
}
