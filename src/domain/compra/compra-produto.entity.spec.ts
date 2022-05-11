import {v4 as uuid} from 'uuid'
import Produto from '../produto/produto.entity';
import CompraProduto from './compra-produto.entity';

describe("Test compra produto", () => {

  it("should add compra produto", () =>{
    const id = uuid();
    const produto = new Produto(id,  "Produto 1", 100.00);
    const compraProduto = new CompraProduto(id, produto, 2);
    expect(compraProduto.id).toBe(id);
    expect(compraProduto.quantidade).toEqual(2);
    expect(compraProduto.produto.id).toBe(id);
    expect(compraProduto.subTotal()).toEqual(200);
  });
});