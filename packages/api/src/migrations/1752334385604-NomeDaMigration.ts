import { MigrationInterface, QueryRunner } from "typeorm";

export class NomeDaMigration1752334385604 implements MigrationInterface {
    name = 'NomeDaMigration1752334385604'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "age2" TO "age"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "age" TO "age2"`);
    }

}
