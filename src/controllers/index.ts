import {PingController} from './ping';
import { ProdutoController } from './produto';
import { EntradaProdutoController } from './entradaProduto';
import { SaidaProdutoController } from './saidaProduto';
import { EstoqueController } from './estoque';
import { UsuarioController } from './usuario';


export const CONTROLLERS = [
    new PingController(),
    new ProdutoController(),
    new EntradaProdutoController(),
    new SaidaProdutoController(),
    new EstoqueController(),
    new UsuarioController()
];
