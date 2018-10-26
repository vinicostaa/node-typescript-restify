import {Controller} from './controller';
import {HttpServer} from '../server/httpServer';
import {Request, Response} from 'restify';
import {saidaProdutoService} from '../services/saidaProduto';

export class SaidaProdutoController implements Controller {
    public initialize(httpServer: HttpServer): void {
        httpServer.get('saida-produtos', this.list.bind(this));
        httpServer.get('saida-produto/:id', this.getById.bind(this));
        httpServer.post('saida-produto', this.create.bind(this));
        httpServer.put('saida-produto/:id', this.update.bind(this));
        httpServer.del('saida-produto/:id', this.remove.bind(this));
    }

    private async list(req: Request, res: Response): Promise<void> {
        res.send(await saidaProdutoService.list());
    }

    private async getById(req: Request, res: Response): Promise<void> {
        const entradaProduto = await saidaProdutoService.getById(req.params.id);
        res.send(entradaProduto ? 200 : 404, entradaProduto);
    }

    private async create(req: Request, res: Response): Promise<void> {
        res.send(await saidaProdutoService.create(req.body));
    }

    private async update(req: Request, res: Response): Promise<void> {
        res.send(await saidaProdutoService.update({...req.body, id: req.params.id}));
    }

    private async remove(req: Request, res: Response): Promise<void> {
        try {
            await saidaProdutoService.delete(req.params.id);
            res.send(200);
        }
        catch (e) {
            res.send(500);
        }
    }
}
