import { connectdb } from '../../infra/db';
import { CompanyRepository } from './company';

export interface IRepositories {
  company: CompanyRepository;
}

class Repositories {
  async getRepository(): Promise<IRepositories> {
    const connect = await connectdb;

    return {
      company: new CompanyRepository(connect),
    };
  }
}

export const repositories = new Repositories();
