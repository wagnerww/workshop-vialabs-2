import {v4 as uuid} from 'uuid';
import Produto from "./produto.entity";

describe("Test product entity", () => {

  it("should create a product", () => {
    const id = uuid();
    const produto = new Produto(id, "Produto 1", 10.00);
    expect(produto.id).toBe(id);
    expect(produto.nome).toBe("Produto 1");
    expect(produto.preco).toBe(10.00);
  });

  it("should throw error on product id is empty", () => {
    expect(() => {
      const produto = new Produto("", "Produto 1", 10.00);
    }).toThrowError("Id não pode ser em branco");
  });

  it("should throw error on product name is empty", () => {
    expect(() => {
      const id = uuid();
      const produto = new Produto(id, "", 10.00);
    }).toThrowError("Nome não pode ser em branco");
  });

  it("should throw error on product price is zero", () => {
    const id = uuid();
    expect(() => {
      const produto = new Produto(id, "Produto 1", 0);
    }).toThrowError("Preço não pode ser igual a 0");
  });

  it("should increment percentage on price product", () => {
    const id = uuid();
    const produto = new Produto(id, "Produto 1", 100.00);
    produto.aumentarPrecoEmPorcentagem(80);
    expect(produto.preco).toBe(180);
  });

  it("should decrease percentage on price product", () => {
    const id = uuid();
    const produto = new Produto(id, "Produto 1", 100.00);
    produto.diminuirPrecoEmPorcentagem(80);
    expect(produto.preco).toBe(20);
  });

  it("should throw error on increment value zero at percentage on price product", () => {
    const id = uuid();
    const produto = new Produto(id, "Produto 1", 100.00);
    expect(() => {
      produto.aumentarPrecoEmPorcentagem(0);
    }).toThrowError("Porcentagem de aumento não pode ser igual a 0")
  });

  it("should throw error on decrease value zero at percentage on price product", () => {
    const id = uuid();
    const produto = new Produto(id, "Produto 1", 100.00);
    expect(() => {
      produto.diminuirPrecoEmPorcentagem(0);
    }).toThrowError("Porcentagem de aumento não pode ser igual a 0")
  });

});