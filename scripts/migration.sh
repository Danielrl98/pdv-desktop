cd packages/api

npx typeorm-ts-node-commonjs migration:generate ./src/migrations/NomeDaMigration -d src/infra/db/config/index.ts

npx typeorm-ts-node-commonjs migration:run -d src/infra/db/config/index.ts

#typeorm migration:revert