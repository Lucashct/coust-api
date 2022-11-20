import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Conta } from "./Conta";

@Entity('cartoes')
export class Cartao {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nomeCartao: string

  @Column({ type: 'double'})
  limite: number
  
  @OneToMany(() => Conta, conta => conta.cartao)
  contas: Conta[]
}