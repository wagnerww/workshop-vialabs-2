import CompraProduto from "./compra-produto.entity";

export default class Compra {
  private _id: string;
  private _nomeCliente: string;
  private _compraProdutos: CompraProduto[] = [];
  private _total: number;

  constructor(id: string, nomeCliente: string, compraProdutos: CompraProduto[]) {
    this._id = id;
    this._nomeCliente = nomeCliente;
    this._compraProdutos = compraProdutos;
    this._total = this.total();
  }

  total(): number {
    let somaTotal = 0;
    for (let i = 0; i < this._compraProdutos.length; i++) {
      const compraProduto = this._compraProdutos[i];
      somaTotal = +somaTotal + compraProduto.subTotal();
    }
    return +somaTotal;
  }

  get id(): string {
    return this._id;
  }
}