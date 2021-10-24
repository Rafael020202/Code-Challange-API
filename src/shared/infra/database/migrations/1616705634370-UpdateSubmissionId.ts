import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class UpdateSubmissionId1616705634370 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('submissions', 'id', 'id_old');
        
        await queryRunner.addColumn('submissions', 
            new TableColumn({
                name: 'id',
                type: 'varchar',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()'
            })
        );

        await queryRunner.dropColumn('submissions', 'id_old');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('submissions','id');
        await queryRunner.renameColumn('submissions', 'id_old', 'id');
        
    }

}
