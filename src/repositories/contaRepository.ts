import { AppDataSource } from "../data-source";
import { Conta } from "../entities/Conta";

export const contaRepository = AppDataSource.getRepository(Conta);