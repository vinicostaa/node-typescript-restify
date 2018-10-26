import 'reflect-metadata';
import {ApiServer} from './server/index';
import {DatabaseProvider} from './database/index';

DatabaseProvider.configure({
    type: process.env.DATABASE_TYPE as any || 'mysql',
    database: process.env.DATABASE_NAME || 'estoque',
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || 'Alunos1234',
    host: process.env.DATABASE_HOST || 'localhost',
    port: +process.env.DATABASE_PORT || 3306,
    ssl: !!process.env.USE_SSL
});

const server = new ApiServer();
server.start(+process.env.PORT || 8080);
