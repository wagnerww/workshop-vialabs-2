export default class Produto {
  private _id: string;
  private _nome: string;
  private _preco: number;

  constructor(id: string, nome: string, preco: number) {
    this._id = id;
    this._nome = nome;
    this._preco = preco;

    this.validate();
  }

  public validate(): boolean {
    if (this._id.length === 0) {
      throw new Error("Id não pode ser em branco");
    }
    if (this._nome.length === 0) {
      throw new Error("Nome não pode ser em branco");
    }
    if (this._preco <= 0) {
      throw new Error("Preço não pode ser igual a 0");
    }

    return true;
  }

  get id(): string {
    return this._id;
  }

  get nome(): string {
    return this._nome;
  }

  get preco(): number {
    return this._preco;
  }

  alterarNome(nome: string): void {
    this._nome = nome;
  }

  aumentarPrecoEmPorcentagem(porcentagem: number): void {
    if (+porcentagem <= 0) {
      throw new Error("Porcentagem de aumento não pode ser igual a 0");
    }

    this._preco = this._preco + (this._preco * (porcentagem / 100));
  }

  diminuirPrecoEmPorcentagem(porcentagem: number): void {
    if (+porcentagem <= 0) {
      throw new Error("Porcentagem de aumento não pode ser igual a 0");
    }

    this._preco = this._preco - (this._preco * (porcentagem / 100));
  }

}