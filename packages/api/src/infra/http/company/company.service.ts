import { Injectable } from '@nestjs/common';
import { repositories } from '../../../domain/repository';
import { ICompany } from 'src/domain/schema/company';

@Injectable()
export class CompanyService {
  constructor() {}

  async create(company: ICompany) {
    const res = (await repositories.getRepository()).company.create(company);
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
    const res = (await repositories.getRepository()).company.findMany(
      filter,
      pagination,
    );
    return res;
  }
}
