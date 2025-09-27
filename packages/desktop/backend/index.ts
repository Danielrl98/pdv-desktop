import { CompanyRepository } from './repository/company'
import { connectdb } from './config'

export async function teste() {
  const connect = await connectdb();

  const c = new CompanyRepository(connect)

  const res = await c.findMany({} as any)

  return res
}

