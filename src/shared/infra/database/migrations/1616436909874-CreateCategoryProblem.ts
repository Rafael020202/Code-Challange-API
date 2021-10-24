import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class CreateCategoryProblem1616436909874 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('problems',
            new TableColumn({
                name: 'category_id',
                type: 'integer',
                isNullable: true
            })
        );
        
        await queryRunner.createForeignKey('problems', 
        new TableForeignKey({
                columnNames: ['category_id'],
                referencedTableName: 'categories',
                referencedColumnNames: ['id'],
                onDelete: 'SET NULL',
                name: 'category_id_foreign_key'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('problems', 'category_id_foreign_key');
        await queryRunner.dropColumn('problems', 'category_id');
    }

}
