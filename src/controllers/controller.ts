import {HttpServer} from '../server/httpServer';

export interface Controller {
    initialize(httpServer: HttpServer): void;
}
