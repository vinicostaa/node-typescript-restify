import {Controller} from './controller';
import {HttpServer} from '../server/httpServer';
import {Request, Response} from 'restify';
import {billService} from '../services/bill';

export class BillController implements Controller {
    public initialize(httpServer: HttpServer): void {
        httpServer.get('customer/:id/bills', this.list.bind(this));
        httpServer.get('customer/:id/bill/:bid', this.getById.bind(this));
        httpServer.post('customer/:id/bill', this.create.bind(this));
        httpServer.del('customer/:id/bill/:bid', this.remove.bind(this));
    }

    private async list(req: Request, res: Response): Promise<void> {
        res.send(await billService.list(req.params.id));
    }

    private async getById(req: Request, res: Response): Promise<void> {
        const bill = await billService.getById(req.params.id);
        res.send(bill ? 200 : 404, bill);
    }

    private async create(req: Request, res: Response): Promise<void> {
        res.send(await billService.create(req.params.id, req.body));
    }

    private async remove(req: Request, res: Response): Promise<void> {
        try {
            await billService.delete(req.params.bid);
            res.send(200);
        }
        catch (e) {
            res.send(500);
        }
    }
}
