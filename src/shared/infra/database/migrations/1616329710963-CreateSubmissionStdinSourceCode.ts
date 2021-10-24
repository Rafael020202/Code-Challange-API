import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class CreateSubmissionStdinSourceCode1616329710963 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('submissions',
            [
                new TableColumn({
                    name: 'source_code',
                    type: 'varchar',
                    isNullable: true
                }),

                new TableColumn({
                    name: 'stdin',
                    type: 'varchar',
                    isNullable: true
                })
            ]
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('submissions', 'source_code');
        await queryRunner.dropColumn('submissions', 'stdin');
    }

}
