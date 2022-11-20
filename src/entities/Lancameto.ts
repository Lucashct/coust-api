import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Conta } from "./Conta"

export class Lancamento{
  
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  numeroDaParcela: number

  @Column({ type: 'double' })
  valorDaParcela: number

  @Column({ type: 'date' })
  dataVencimento: string

  @ManyToOne(() => Conta, conta => conta.lancamentos)
  @JoinColumn({ name: 'idConta' })
  conta: Conta
}