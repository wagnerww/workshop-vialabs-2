import Produto from "./produto.entity";
import ProdutoRepository from "./produto.repository";

describe("Test product repository", () => {

  it("shoul create a product and validate data", () => {
    const produto = new Produto("1", "Produto 1", 10.00);
    const repository = new ProdutoRepository();
    repository.salvar(produto);

    const produtoSalvo = repository.buscarPorId("1");
    expect(produtoSalvo).toBeTruthy();
    expect(produtoSalvo.nome).toEqual("Produto 1");
    expect(produtoSalvo.preco).toEqual(10.00);
  });

  it("shoul throw error on search product by id", () => {
    const produto = new Produto("2", "Produto 1", 10.00);
    const repository = new ProdutoRepository();
    repository.salvar(produto);

    expect(() => {
      const produtoSalvo = repository.buscarPorId("0");
    }).toThrowError("Produto não encontrado");
  });

  it("shoul change a product and validate data", () => {
    const produto = new Produto("3", "Produto 1", 10.00);
    const repository = new ProdutoRepository();
    repository.salvar(produto);

    let produtoSalvo = repository.buscarPorId("3");
    expect(produtoSalvo.id).toEqual("3");

    produtoSalvo.alterarNome("Produto 3");
    repository.editarProdutoPorId(produtoSalvo.id, produtoSalvo);
    produtoSalvo = repository.buscarPorId("3");
    expect(produtoSalvo.nome).toEqual("Produto 3");
  });

  it("shoul delete a product and validate data", () => {
    const produto = new Produto("4", "Produto 4", 10.00);
    const repository = new ProdutoRepository();
    repository.salvar(produto);

    let produtoSalvo = repository.buscarPorId("4");
    expect(produtoSalvo.id).toEqual("4");

    repository.apagarProdutoPorId(produtoSalvo.id);

    expect(() => {
      produtoSalvo = repository.buscarPorId("4");
    }).toThrowError("Produto não encontrado");

  });
})