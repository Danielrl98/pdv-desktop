import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CompanyService } from './company.service';
import { ICompany } from '../../../domain/schema';
import { Logger } from '../../../domain/libs';
import { getConfigEnv } from '../../../infra/config';

@Controller('company')
export class CompanyController {
  constructor(
    private readonly service: CompanyService,
    private readonly logger: Logger,
  ) {
    const enviroment = getConfigEnv('NODE_ENV');
    this.logger.register('Company', enviroment);
  }

  @Post('create')
  async create(@Body() body: ICompany) {
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
