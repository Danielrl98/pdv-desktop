import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { configs } from './config';
//import { NomeDaMigration1752332611655 } from '../../../migrations/1752332611655-NomeDaMigration';

const DataSourceApp = new DataSource(configs.sqlite as DataSourceOptions);

export const connectdb = DataSourceApp.initialize().then(
  (connection) => connection,
);