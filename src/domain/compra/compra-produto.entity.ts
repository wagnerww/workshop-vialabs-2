import Produto from "../produto/produto.entity";

export default class CompraProduto {
  private _id: string;
  private _produto: Produto;
  private _quantidade: number;
  private _subTotal: number;

  constructor(id: string, produto: Produto, quantidade: number){
    this._id = id;
    this._produto = produto;
    this._quantidade = quantidade;
    this._subTotal = this.subTotal();
  }

  subTotal(): number {
    return +this._produto.preco * +this._quantidade;
  }

  get id(): string {
    return this._id;
  }

  get produto(): Produto {
    return this._produto;
  }

  get quantidade(): number {
    return this._quantidade;
  }

}