import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class SetProbemResultNull1616258487783 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('problems', 'response', 
            new TableColumn({
                name: 'response',
                type: 'varchar',
                isNullable: true
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('problems', 'response', 
            new TableColumn({
                name: 'response',
                type: 'varchar',
                isNullable: false
            })
        );
    }

}
