import {MigrationInterface, QueryRunner} from "typeorm";

export class DropInputExample1633875203487 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('InputExample', 'problem_id_foreign_key');
        await queryRunner.dropTable('InputExample');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
