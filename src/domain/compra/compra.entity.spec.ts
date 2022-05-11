import {v4 as uuid} from 'uuid';
import Produto from '../produto/produto.entity';
import CompraProduto from './compra-produto.entity';
import Compra from './compra.entity';

describe("Test order domain etity", () => {
  it("should create order and validate data", () => {
    const id = uuid();
    const produtoId1 = uuid();
    const produto1 = new Produto(id,  "Produto 1", 100.00);
    const compraProduto1 = new CompraProduto(produtoId1, produto1, 2);

    const produtoId2 = uuid();
    const produto2 = new Produto(produtoId2,  "Produto 2", 200.00);
    const compraProduto2 = new CompraProduto(produtoId2, produto2, 2);
    
    const compra = new Compra(id, "Cliente 1", [compraProduto1, compraProduto2]);
    expect(compra.id).toBe(id);
    expect(compra.total()).toEqual(600.00);
  })
})