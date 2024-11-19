import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersAndArticles1732032059134 implements MigrationInterface {
    name = 'CreateUsersAndArticles1732032059134'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`article\` (\`id\` int NOT NULL AUTO_INCREMENT, \`titel\` int NOT NULL, \`body\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userName\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`gender\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`article\``);
    }

}
