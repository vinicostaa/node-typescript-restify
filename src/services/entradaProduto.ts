import { EntradaProduto } from "../models/entradaProduto";
import { DatabaseProvider } from "../database";


export class EntradaProdutoService {
    public async getById(id: number): Promise<EntradaProduto> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(EntradaProduto).findOneById(id);
    }

    public async create(produto: EntradaProduto): Promise<EntradaProduto> {
        // Normally DTO !== DB-Entity, so we "simulate" a mapping of both
        const newEntradaProduto = new EntradaProduto();
        newEntradaProduto.data_entrada = produto.data_entrada;
        newEntradaProduto.id_produto = produto.id_produto;
        newEntradaProduto.qtde = produto.qtde;
        newEntradaProduto.valor_unitario = produto.valor_unitario;

        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(EntradaProduto).save(newEntradaProduto);
    }

    public async list(): Promise<EntradaProduto[]> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(EntradaProduto).find();
    }

    public async update(entradaProduto: EntradaProduto): Promise<EntradaProduto> {
        console.log(entradaProduto);
        const connection = await DatabaseProvider.getConnection();
        const repository = connection.getRepository(EntradaProduto);
        const entity = await repository.findOneById(entradaProduto.id);
        entity.data_entrada = entradaProduto.data_entrada;
        entity.id_produto = entradaProduto.id_produto;
        entity.valor_unitario = entradaProduto.valor_unitario;

        return await repository.save(entity);
    }

    public async delete(id: number): Promise<void> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(EntradaProduto).removeById(id)
    }
}

export const entradaProdutoService = new EntradaProdutoService();