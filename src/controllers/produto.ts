import { Controller } from "./controller";
import { HttpServer } from "../server/httpServer";
import {Request, Response} from 'restify';
import {produtoService} from '../services/produto';


export class ProdutoController implements Controller {
    public initialize(httpServer: HttpServer): void {
        httpServer.get('produtos', this.list.bind(this));
        httpServer.get('produto/:id', this.getById.bind(this));
        httpServer.post('produto', this.create.bind(this));
        httpServer.put('produto/:id', this.update.bind(this));
        httpServer.del('produto/:id', this.remove.bind(this));
    }
    
        private async list(req: Request, res: Response): Promise<void> {
            res.send(await produtoService.list());
        }
    
        private async getById(req: Request, res: Response): Promise<void> {
            const customer = await produtoService.getById(req.params.id);
            res.send(customer ? 200 : 404, customer);
        }
    
        private async create(req: Request, res: Response): Promise<void> {
            res.send(await produtoService.create(req.body));
        }
    
        private async update(req: Request, res: Response): Promise<void> {
            res.send(await produtoService.update({...req.body, id: req.params.id}));
        }
    
        private async remove(req: Request, res: Response): Promise<void> {
            try {
                await produtoService.delete(req.params.id);
                res.send(200);
            }
            catch (e) {
                res.send(500);
            }
        }
    
}