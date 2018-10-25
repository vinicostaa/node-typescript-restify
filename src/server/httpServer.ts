import {RequestHandler} from 'restify';

export interface HttpServer {
    get(url: string, requestHandler: RequestHandler): void;

    post(url: string, requestHandler: RequestHandler): void;

    del(url: string, requestHandler: RequestHandler): void;

    put(url: string, requestHandler: RequestHandler): void;
}
