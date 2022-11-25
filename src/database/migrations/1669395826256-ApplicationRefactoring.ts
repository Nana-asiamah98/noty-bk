import { MigrationInterface, QueryRunner } from "typeorm";

export class ApplicationRefactoring1669395826256 implements MigrationInterface {
    name = 'ApplicationRefactoring1669395826256'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tbl_application" ADD "username" character varying  NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tbl_application" DROP COLUMN "username"`);
    }

}
