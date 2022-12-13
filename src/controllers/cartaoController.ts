import { Request, Response } from "express";
import { Cartao } from "../entities/Cartao";
import { cartaoRepository } from "../repositories/cartaoRepository";
import { StatusResultado } from "../util/enums/StatusResultados";
import { Resposta } from "../util/Resposta";

export class CartaoController {
 public async createCartao(req: Request, res: Response) {
  const {
    nomeCartao,
    limite
  } = req.body;

  try {
    const resposta = new Resposta();

    const novoCartao = cartaoRepository.create({ nomeCartao: nomeCartao, limite: limite });
    await cartaoRepository.save(novoCartao);

    resposta.setItem(novoCartao);
    resposta.setMensagem('Cartão cadastrado com sucesso!');
    resposta.setStatus(StatusResultado.SUCESSO);
    
    res.status(201).json(resposta.montarResultado());
  } catch (error) {
    const resposta = new Resposta();
    resposta.setMensagem('Erro ao cadastrar novo cartão!');
    resposta.setStatus(StatusResultado.ERRO);
    
    console.log(error)
    
    res.status(500).json(resposta.montarResultado());
  }
 }

 public async listCartoes(req: Request, res: Response) {
  try {
    const resposta = new Resposta();

    const lista :Cartao[] = await cartaoRepository.find();

    resposta.setLista(lista);
    resposta.setMensagem('Cartões listados com sucesso.');
    resposta.setStatus(StatusResultado.SUCESSO);

    res.status(200).json(resposta.montarResultado())
  } catch(error) {
    const resposta = new Resposta();
    resposta.setMensagem('Erro ao listar os cartões!');
    resposta.setStatus(StatusResultado.ERRO);

    console.log(error);

    res.status(500).json(resposta.montarResultado());
  }
 }
}