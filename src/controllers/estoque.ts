import {Controller} from './controller';
import {HttpServer} from '../server/httpServer';
import {Request, Response} from 'restify';
import {estoqueService} from '../services/estoque';

export class EstoqueController implements Controller {
    public initialize(httpServer: HttpServer): void {
        httpServer.get('estoque', this.list.bind(this));
        httpServer.get('estoque/:id', this.getById.bind(this));
        // httpServer.post('entrada-produto', this.create.bind(this));
        // httpServer.put('entrada-produto/:id', this.update.bind(this));
        // httpServer.del('entrada-produto/:id', this.remove.bind(this));
    }

    private async list(req: Request, res: Response): Promise<void> {
        res.send(await estoqueService.list());
    }

    private async getById(req: Request, res: Response): Promise<void> {
        const entradaProduto = await estoqueService.getById(req.params.id);
        res.send(entradaProduto ? 200 : 404, entradaProduto);
    }

    // private async create(req: Request, res: Response): Promise<void> {
    //     res.send(await estoqueService.create(req.body));
    // }

    // private async update(req: Request, res: Response): Promise<void> {
    //     res.send(await estoqueService.update({...req.body, id: req.params.id}));
    // }

    private async remove(req: Request, res: Response): Promise<void> {
        try {
            await estoqueService.delete(req.params.id);
            res.send(200);
        }
        catch (e) {
            res.send(500);
        }
    }
}
