import 'reflect-metadata';
import { Company } from '../schema/company';
import { DataSource, DataSourceOptions } from 'typeorm';

const Schemas = [Company];

export const configs = {
  sqlite: {
    type: 'sqlite',
    database: './sqlite/banco.db',
    synchronize: true,
    logging: false,
    entities: Schemas,
    driver: undefined, // Deixa o TypeORM detectar automaticamente
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

let dataSourceApp: DataSource | null = null;

export const connectdb = async () => {
  if (!dataSourceApp) {
    dataSourceApp = new DataSource(configs.sqlite as DataSourceOptions);
    await dataSourceApp.initialize();
  }
  return dataSourceApp;
};
