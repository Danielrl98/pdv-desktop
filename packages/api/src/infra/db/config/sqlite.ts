import 'reflect-metadata';
import { Company } from '../../../domain/schema/company';
import { DataSource, DataSourceOptions } from 'typeorm';
//import { NomeDaMigration1752332611655 } from '../../../migrations/1752332611655-NomeDaMigration';

const Schemas = [Company];

const configs = {
  sqlite: {
    type: 'sqlite',
    database: './sqlite/banco.db',
    synchronize: true,
    logging: true,
    entities: Schemas,
  },
  postgres: {
    type: 'postgres',
    host: 'ballast.proxy.rlwy.net',
    port: 55500,
    username: 'postgres',
    password: 'WTcEgqSnBCayjJGnOsINARaPdWBQNHiH',
    database: 'railway',
    synchronize: false,
    migrationsRun: false,
    entities: Schemas,
    migrations: [],
    logging: true,
  },
};

const DataSourceApp = new DataSource(configs.sqlite as DataSourceOptions);

export const connectdb = DataSourceApp.initialize().then(
  (connection) => connection,
);