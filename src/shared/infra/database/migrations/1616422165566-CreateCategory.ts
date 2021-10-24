import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCategory1616422165566 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'categories',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        generationStrategy: 'increment',
                    }, 

                    {
                        name: 'description',
                        type: 'varchar'
                    },

                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },

                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('categories');
    }

}
