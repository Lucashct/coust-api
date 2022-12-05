import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cartao } from "./Cartao";
import { Lancamento } from "./Lancameto";

@Entity('contas')
export class Conta {
  
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 40 })
  nome: string

  @Column({ length: 200 })
  descricao: string

  @Column({ type: 'decimal' })
  valorTotal: number

  @Column({ type: 'decimal' })
  valorPago: number

  @Column({ type: 'date', default: () => 'NOW()' })
  dataCadastro: string

  @Column()
  parcelas: number

  @ManyToOne(() => Cartao, cartao => cartao.contas)
  @JoinColumn({ name: 'idCartao' })
  cartao: Cartao

  @OneToMany(() => Lancamento, lancamento => lancamento.conta)
  lancamentos: Lancamento[]
}