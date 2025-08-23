import { Injectable } from '@nestjs/common';
import { repositories } from '../../../domain/repository';
import { IUser } from '../../../domain/schema';

@Injectable()
export class UsersService {
  constructor() {}

  async create(user: IUser) {
    const res = (await repositories.getRepositoryPostgres()).users.create(
      user,
    );
    return res;
  }

  async findMany(
    filter: IUser,
    pagination: {
      page: number;
      pageSize: number;
    } = {
      page: 1,
      pageSize: 10,
    },
  ) {
    const res = (await repositories.getRepositoryPostgres()).users.findMany(
      filter,
      pagination,
    );
    return res;
  }
}
