import { SaidaProduto } from "../models/saidaProduto";
import { DatabaseProvider } from "../database";


export class SaidaProdutoService {
    public async getById(id: number): Promise<SaidaProduto> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(SaidaProduto).findOneById(id);
    }

    public async create(produto: SaidaProduto): Promise<SaidaProduto> {
        // Normally DTO !== DB-Entity, so we "simulate" a mapping of both
        const newSaidaProduto = new SaidaProduto();
        newSaidaProduto.data_saida = produto.data_saida;
        newSaidaProduto.id_produto = produto.id_produto;
        newSaidaProduto.qtde = produto.qtde;
        newSaidaProduto.valor_unitario = produto.valor_unitario;

        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(SaidaProduto).save(newSaidaProduto);
    }

    public async list(): Promise<SaidaProduto[]> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(SaidaProduto).find();
    }

    public async update(entradaProduto: SaidaProduto): Promise<SaidaProduto> {
        console.log(entradaProduto);
        const connection = await DatabaseProvider.getConnection();
        const repository = connection.getRepository(SaidaProduto);
        const entity = await repository.findOneById(entradaProduto.id);
        entity.data_saida = entradaProduto.data_saida;
        entity.id_produto = entradaProduto.id_produto;
        entity.valor_unitario = entradaProduto.valor_unitario;

        return await repository.save(entity);
    }

    public async delete(id: number): Promise<void> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(SaidaProduto).removeById(id)
    }
}

export const saidaProdutoService = new SaidaProdutoService();