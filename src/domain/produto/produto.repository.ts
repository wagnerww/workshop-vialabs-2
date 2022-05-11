import Produto from "./produto.entity";

const mockDados: Produto[] = [];

export default class ProdutoRepository {

  public salvar(produto: Produto): void {
    mockDados.push(produto);
  }

  public buscarPorId(id: string): Produto {
    const produto = mockDados.filter((produto) => produto.id === id)

    if (produto.length === 0) {
      throw new Error("Produto não encontrado");
    }

    return produto[0]
  }

  public editarProdutoPorId(id: string, produto: Produto): void {
    mockDados.filter((produto) => produto.id === id).map(() => (produto))
  }

  public apagarProdutoPorId(id: string): void {
    mockDados.splice(mockDados.findIndex((produto) => produto.id === id), 1);
  }

  public buscarTodos(): Produto[] {
    return mockDados;
  }
}