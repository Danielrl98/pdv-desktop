import { connectdb } from '../../infra/db';
import { CompanyRepository } from '../../domain/repository/company';
import { companyMocks } from '../mocks/company';

describe('Repository test', () => {
  let connection;
  let companyRepository;

  beforeAll(async () => {
    connection = await connectdb;
    companyRepository = new CompanyRepository(connection);
  });

  test('Should register company', async () => {
    let register = false;

    for (let mock of companyMocks) {
      const res = await companyRepository.create(mock);

      if (res.id) {
        register = true;
      }
    }

    expect(register).toBeTruthy();
  });

  test('Should findMany company', async () => {
    const result = await companyRepository.findMany();

    expect(result.total).toBeGreaterThan(0);
  });
});
