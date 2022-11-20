import { AppDataSource } from "../data-source";
import { Cartao } from "../entities/Cartao";

export const cartaoRepository = AppDataSource.getRepository(Cartao);