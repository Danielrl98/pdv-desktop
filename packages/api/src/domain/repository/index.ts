import {  connectdbSqlite } from '../../infra/db';
import { CompanyRepository } from './company';
import { UserRepository } from './users';

export interface IRepositories {
  company: CompanyRepository;
  users: UserRepository;
}

class Repositories {
  async getRepositoryPostgres(): Promise<IRepositories> {
    const connect = await connectdbSqlite;

    return {
      company: new CompanyRepository(connect),
      users: new UserRepository(connect),
    };
  }
}

export const repositories = new Repositories();
