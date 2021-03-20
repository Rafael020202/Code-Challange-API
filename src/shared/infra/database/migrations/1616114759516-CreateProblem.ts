import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProblem1616114759516 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: 'problems',
                    
                    columns: [
                        {
                            name: 'id',
                            type: 'varchar',
                            generationStrategy: 'uuid',
                            isPrimary: true,
                            default: 'uuid_generate_v4()',
                        },

                        {
                            name: 'title',
                            type: 'varchar',
                        },

                        {
                            name: 'description',
                            type: 'varchar',
                        },

                        {
                            name: 'source_code',
                            type: 'varchar'
                        },

                        {
                            name: 'input_description',
                            type: 'varchar'
                        },

                        {
                            name: 'output_description',
                            type: 'varchar'
                        },

                        
                        {
                            name: 'response',
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
                }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('problems');
    }

}
