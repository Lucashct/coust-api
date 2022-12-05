import { MigrationInterface, QueryRunner } from "typeorm";

export class default1670180498168 implements MigrationInterface {
    name = 'default1670180498168'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "lancamento" ("id" SERIAL NOT NULL, "numeroDaParcela" integer NOT NULL, "valorDaParcela" numeric NOT NULL, "dataVencimento" date NOT NULL, "idConta" integer, CONSTRAINT "PK_a4ebec2ec479895eaa4e2bc9067" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contas" ("id" SERIAL NOT NULL, "nome" character varying(40) NOT NULL, "descricao" character varying(200) NOT NULL, "valorTotal" numeric NOT NULL, "valorPago" numeric NOT NULL, "dataCadastro" date NOT NULL DEFAULT NOW(), "parcelas" integer NOT NULL, "idCartao" integer, CONSTRAINT "PK_f5a347b0829de9a7a38cf1d052f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cartoes" ("id" SERIAL NOT NULL, "nomeCartao" character varying NOT NULL, "limite" numeric NOT NULL, CONSTRAINT "PK_3e003b4e4bc003e65b11ec76e5a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "lancamento" ADD CONSTRAINT "FK_3803ce2d347aa91d7cd45f65c5a" FOREIGN KEY ("idConta") REFERENCES "contas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contas" ADD CONSTRAINT "FK_c996ae7173b6a1f726fe973e1c1" FOREIGN KEY ("idCartao") REFERENCES "cartoes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contas" DROP CONSTRAINT "FK_c996ae7173b6a1f726fe973e1c1"`);
        await queryRunner.query(`ALTER TABLE "lancamento" DROP CONSTRAINT "FK_3803ce2d347aa91d7cd45f65c5a"`);
        await queryRunner.query(`DROP TABLE "cartoes"`);
        await queryRunner.query(`DROP TABLE "contas"`);
        await queryRunner.query(`DROP TABLE "lancamento"`);
    }

}
