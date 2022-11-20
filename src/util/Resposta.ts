import { StatusResultado } from "./enums/StatusResultados"

export class Resposta {
  
  private status: StatusResultado | null;

  private mensagem: string | null
  
  private lista: Array<any> | null

  private item: Object | null

  //SETS

  public setStatus(status: StatusResultado | null) { this.status = status; }

  public setMensagem(mensagem: string | null) { this.mensagem = mensagem }

  public setLista(lista: Array<any> | null) { this.lista = lista }

  public setItem(item: Object | null) { this.item = item }

  public montarResultado() :Object {
    const resultado = {
      status: this.status,
      mensagem: this.mensagem,
      lista: this.lista,
      item: this.item
    }

    return resultado;
  }
}