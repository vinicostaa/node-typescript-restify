import {Customer} from '../models/customer';
import {DatabaseProvider} from '../database/index';

export class CustomerService {
    public async getById(id: number): Promise<Customer> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(Customer).findOneById(id);
    }

    public async create(customer: Customer): Promise<Customer> {
        // Normally DTO !== DB-Entity, so we "simulate" a mapping of both
        const newCustomer = new Customer();
        newCustomer.firstName = customer.firstName;
        newCustomer.lastName = customer.lastName;

        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(Customer).save(newCustomer);
    }

    public async list(): Promise<Customer[]> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(Customer).find();
    }

    public async update(customer: Customer): Promise<Customer> {
        console.log(customer);
        const connection = await DatabaseProvider.getConnection();
        const repository = connection.getRepository(Customer);
        const entity = await repository.findOneById(customer.id);
        entity.firstName = customer.firstName;
        entity.lastName = customer.lastName;
        return await repository.save(entity);
    }

    public async delete(id: number): Promise<void> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(Customer).removeById(id)
    }
}

export const customerService = new CustomerService();
