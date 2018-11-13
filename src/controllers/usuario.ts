import { Controller } from "./controller";
import { HttpServer } from "../server/httpServer";
import { Request, Response } from 'restify';
import { usuarioService } from '../services/usuario';


export class UsuarioController implements Controller {
    public initialize(httpServer: HttpServer): void {
        httpServer.get('usuarios', this.list.bind(this));
        httpServer.get('usuario/:id', this.getById.bind(this));
        httpServer.post('usuario', this.create.bind(this));
        httpServer.put('usuario/:id', this.update.bind(this));
        httpServer.del('usuario/:id', this.remove.bind(this));
        httpServer.post('usuario/login', this.login.bind(this));
    }

    private async list(req: Request, res: Response): Promise<void> {
        res.send(await usuarioService.list());
    }

    private async getById(req: Request, res: Response): Promise<void> {
        const customer = await usuarioService.getById(req.params.id);
        res.send(customer ? 200 : 404, customer);
    }

    private async create(req: Request, res: Response): Promise<void> {
        res.send(await usuarioService.create(req.body));
    }

    private async login(req: Request, res: Response): Promise<void> {
        res.send(await usuarioService.login(req.body));
    }

    private async update(req: Request, res: Response): Promise<void> {
        res.send(await usuarioService.update({ ...req.body, id: req.params.id }));
    }

    private async remove(req: Request, res: Response): Promise<void> {
        try {
            await usuarioService.delete(req.params.id);
            res.send(200);
        }
        catch (e) {
            res.send(500);
        }
    }

}