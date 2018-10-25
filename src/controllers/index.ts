import {CustomerController} from './customer';
import {BillController} from './bill';
import {PingController} from './ping';

export const CONTROLLERS = [
    new CustomerController(),
    new BillController(),
    new PingController()
];
