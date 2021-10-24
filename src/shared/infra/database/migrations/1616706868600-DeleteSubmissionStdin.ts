import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class DeleteSubmissionStdin1616706868600 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('submissions', 'stdin');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('submissions',
            new TableColumn({
                name:'stdin',
                type: 'varchar'
            })
        );
    }

}
