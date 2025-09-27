import { DataSource } from 'typeorm';
import { Company, ICompany } from '../schema/company';
const uuid = require('uuid');

export class CompanyRepository {
  private schema = new Company();

  constructor(
    private readonly connect: DataSource,
    private readonly repository = connect.getRepository(Company),
  ) {}

  async create(company: ICompany) {
    this.schema = {
      ...company,
      uuid: uuid.uuid(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const savedUser = await this.repository.save(this.schema);
    return savedUser;
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
    const page = parseInt(pagination?.page?.toString() || '1');
    const limit = parseInt(pagination?.pageSize?.toString() || '10');
    const skip = (page - 1) * limit;

    const [company, total] = await this.repository.findAndCount({
      where: {
        ...filter,
      },
      order: { createdAt: 'DESC' },
      skip,
      take: limit,
    });

    return {
      data: company,
      total,
      page,
      pageSize: limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findOne(filter: Partial<ICompany>) {
    const find = await this.repository.findOne({
      where: {
        ...filter,
      },
    });

    return find;
  }
}
