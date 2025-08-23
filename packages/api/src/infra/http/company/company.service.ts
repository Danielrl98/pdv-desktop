import { Injectable } from '@nestjs/common';
import { repositories } from '../../../domain/repository';
import { ICompany } from 'src/domain/schema';

@Injectable()
export class CompanyService {
  constructor() {}

  async create(company: ICompany) {
    const res = (await repositories.getRepositoryPostgres()).company.create(
      company,
    );
    return res;
  }

  async findMany(
    filter: ICompany,
    pagination: {
      page: number;
      pageSize: number;
    } = {
      page: 1,
      pageSize: 10,
    },
  ) {
    const res = (await repositories.getRepositoryPostgres()).company.findMany(
      filter,
      pagination,
    );
    return res;
  }
}
