import { AppDataSource } from "../data-source";
import { Lancamento } from "../entities/Lancameto";

export const lancamentoRepository = AppDataSource.getRepository(Lancamento);