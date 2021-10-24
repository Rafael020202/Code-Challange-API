import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateInput1616700195149 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'inputs',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        default: 'uuid_generate_v4()',
                    },

                    {
                        name: 'value',
                        type: 'varchar'
                    },

                    {
                        name: 'output',
                        type: 'varchar',
                        isNullable: true
                    },

                    {
                        name: 'problem_id',
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
                ],

                foreignKeys: [
                    {
                        columnNames: ['problem_id'],
                        referencedTableName: 'problems',
                        referencedColumnNames: ['id'],
                        onDelete: 'CASCADE',
                        name: 'problem_id_foreign_key'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('problems', 'problem_id_foreign_key');
        await queryRunner.dropTable('inputs');
    }

}
