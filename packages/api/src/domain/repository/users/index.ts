import { DataSource } from 'typeorm';
import { User, IUser } from '../../schema';
import { v4 as uuidv4 } from 'uuid';

export class UserRepository {
  private schema = new User();

  constructor(
    readonly connect: DataSource,
    private readonly repository = connect.getRepository(User),
  ) {}

  async create(user: IUser) {
    this.schema = {
      ...user,
      uuid: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    } as any;

    const savedUser = await this.repository.save(this.schema);
    return savedUser;
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
    const page = parseInt(pagination?.page?.toString() || '1');
    const limit = parseInt(pagination?.pageSize?.toString() || '10');
    const skip = (page - 1) * limit;

    const [user, total] = await this.repository.findAndCount({
      where: {
        ...filter,
      },
      order: { createdAt: 'DESC' },
      skip,
      take: limit,
    });

    return {
      data: user,
      total,
      page,
      pageSize: limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findOne(filter: Partial<IUser>) {
    const find = await this.repository.findOne({
      where: {
        ...filter,
      },
    });

    return find;
  }

  async update(filter: Partial<IUser>, data: Partial<IUser>) {
    data.updatedAt = new Date();
    await this.repository.update(filter, data);
    return this.repository.findOneBy(filter);
  }

  async delete(uuid: string) {
    const user = await this.repository.findOneBy({ uuid });
    if (!user) {
      return null;
    }
    await this.repository.delete({ uuid });
    return user;
  }
}
