import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddTaskOrder1721660000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('tasks_entity', new TableColumn({
            name: 'task_order',
            type: 'int',
            isNullable: false,
            default: 0,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('tasks_entity', 'task_order');
    }
}
