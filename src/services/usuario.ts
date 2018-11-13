import { Usuario } from "../models/usuario";
import { DatabaseProvider } from "../database";


export class UsuarioService {


    public async login(usuario: Usuario): Promise<Usuario> {
        const connection = await DatabaseProvider.getConnection();
        let resultQuery = await connection.query(`select fun_valida_usuario('${usuario.login}', '${usuario.senha}') as isValid`);
        const isvalide = resultQuery[0].isValid === 1 ? true : false;
        if(isvalide) 
            return await connection.getRepository(Usuario).findOne({login: usuario.login});    
        else 
            throw new Error("User not find");
    }

    public async getById(id: number): Promise<Usuario> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(Usuario).findOneById(id);
    }

    public async create(usuario: Usuario): Promise<Usuario> {
        // Normally DTO !== DB-Entity, so we "simulate" a mapping of both
        const newUsuario = new Usuario();
        newUsuario.login = usuario.login;
        newUsuario.senha = usuario.senha;
        newUsuario.nome = usuario.nome;

        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(Usuario).save(newUsuario);
    }

    public async list(): Promise<Usuario[]> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(Usuario).find();
    }

    public async update(usuario: Usuario): Promise<Usuario> {
        console.log(usuario);
        const connection = await DatabaseProvider.getConnection();
        const repository = connection.getRepository(Usuario);
        const entity = await repository.findOneById(usuario.id);
        entity.login = usuario.login;
        entity.senha = usuario.senha;
        entity.nome = usuario.nome;

        return await repository.save(entity);
    }

    public async delete(id: number): Promise<void> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(Usuario).removeById(id)
    }
}

export const usuarioService = new UsuarioService();