import 'reflect-metadata';
import { Company, User } from '../../../domain/schema';
//import { NomeDa,Migration1752332611655 } from '../../../migrations/1752332611655-NomeDaMigration';

const Schemas = [Company, User];

export const configs = {
  sqlite: {
    type: 'sqlite',
    database: './sqlite/banco.db',
    synchronize: true,
    logging: false,
    entities: Schemas,
  },
  postgres: {
    type: 'postgres',
    host: 'localhost',
    port: 5436,
    username: 'root',
    password: 'root',
    database: 'postgres',
    synchronize: true,
    migrationsRun: false,
    entities: Schemas,
    migrations: [],
    logging: false,
  },
};
