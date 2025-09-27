import "reflect-metadata";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./sqlite/banco.db",
  synchronize: true,
  logging: true,
  entities: [],
});

AppDataSource.initialize()
