import { Produto } from "../models/produto";
import { DatabaseProvider } from "../database";


export class ProdutoService {
    public async getById(id: number): Promise<Produto> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(Produto).findOneById(id);
    }

    public async create(customer: Produto): Promise<Produto> {
        // Normally DTO !== DB-Entity, so we "simulate" a mapping of both
        const newProduto = new Produto();
        newProduto.descricao = customer.descricao;
        newProduto.estoque_minimo = customer.estoque_minimo;
        newProduto.estoque_maximo = customer.estoque_maximo;

        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(Produto).save(newProduto);
    }

    public async list(): Promise<Produto[]> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(Produto).find();
    }

    public async update(produto: Produto): Promise<Produto> {
        console.log(produto);
        const connection = await DatabaseProvider.getConnection();
        const repository = connection.getRepository(Produto);
        const entity = await repository.findOneById(produto.id);
        entity.descricao = produto.descricao;
        entity.estoque_minimo = produto.estoque_minimo;
        entity.estoque_maximo = produto.estoque_maximo;
        return await repository.save(entity);
    }

    public async delete(id: number): Promise<void> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(Produto).removeById(id)
    }
}

export const produtoService = new ProdutoService();