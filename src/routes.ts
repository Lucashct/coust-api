import { Router } from "express";
import { CartaoController } from "./controllers/cartaoController";

const routes = Router();

//ROTAS CARTÕES
routes.post('/cartao/gravar', new CartaoController().createCartao);
routes.get('/cartao/listar', new CartaoController().listCartoes);

export default routes;