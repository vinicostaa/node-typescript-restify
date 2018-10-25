import {HttpServer} from '../server/httpServer';
import {Controller} from './controller';

export class PingController implements Controller {
    public initialize(httpServer: HttpServer): void {
        httpServer.get('ping', (req, res) => res.send(200, 'hello'));
    }
}
