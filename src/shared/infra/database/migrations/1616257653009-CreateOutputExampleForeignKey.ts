import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class CreateOutputExampleForeignKey1616257653009 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('output_examples', 
            new TableColumn({
                name: 'input_example_id',
                type: 'varchar'
            })
        );
        
        await queryRunner.createForeignKey('output_examples', 
        
            new TableForeignKey({
                columnNames: ['input_example_id'],
                referencedTableName: 'InputExample',
                referencedColumnNames: ['id'],
                name: 'input_example_id_foreign_key',
                onDelete: 'CASCADE',

            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('output_examples','input_example_id_foreign_key');
        await queryRunner.dropColumn('output_examples', 'input_example_id');
    }

}
