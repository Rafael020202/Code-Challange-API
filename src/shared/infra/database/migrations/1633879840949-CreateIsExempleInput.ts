import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class CreateIsExempleInput1633879840949 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('inputs', new TableColumn({
            name: 'isExample',
            type: 'boolean',
            isNullable: true,
            default: false
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('inputs', 'isExample');
    }

}
