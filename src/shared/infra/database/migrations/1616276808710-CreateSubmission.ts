import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSubmission1616276808710 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'submissions',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true
                    },

                    {
                        name: 'status',
                        type: 'varchar',
                        isNullable: true
                    },

                    {
                        name: 'response',
                        type: 'varchar',
                        isNullable: true
                    },

                    {
                        name: 'problem_id',
                        type: 'varchar'
                    },
                ],

                foreignKeys: [
                    {
                        columnNames: ['problem_id'],
                        referencedTableName: 'problems',
                        referencedColumnNames: ['id'],
                        name: 'problem_id_foreign_key',
                        onDelete: 'CASCADE'
                    }
                ]
            })
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('submissions', 'problem_id_foreign_key');
        await queryRunner.dropTable('submissions');
    }

}
