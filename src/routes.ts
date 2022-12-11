import { Router } from "express";
import { CartaoController } from "./controllers/cartaoController";

const routes = Router();

//ROTAS CARTÕES
routes.post('/cartao/gravar', new CartaoController().createCartao);

export default routes;