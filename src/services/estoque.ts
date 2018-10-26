import { DatabaseProvider } from "../database";
import { Estoque } from "../models/estoque";


export class EstoqueService {
    public async getById(id: number): Promise<Estoque> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(Estoque).findOneById(id);
    }

    public async list(): Promise<Estoque[]> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(Estoque).find();
    }

    public async delete(id: number): Promise<void> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(Estoque).removeById(id)
    }
}

export const estoqueService = new EstoqueService();