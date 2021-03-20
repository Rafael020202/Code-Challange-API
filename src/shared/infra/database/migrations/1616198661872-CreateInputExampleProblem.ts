import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class CreateInputExampleProblem1616198661872 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('InputExample', 
            new TableColumn({
                name: 'problem_id',
                type: 'varchar'
            })
        );

        await queryRunner.createForeignKey('InputExample',
            new TableForeignKey({
                columnNames: ['problem_id'],
                referencedTableName: 'problems',
                referencedColumnNames: ['id'],
                name: 'problem_id_foreign_key',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('InputExample', 'problem_id_foreign_key');
        await queryRunner.dropColumn('InputExample','problem_id');
    }

}
