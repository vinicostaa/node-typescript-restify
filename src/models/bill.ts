import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Customer} from './customer';

@Entity()
export class Bill {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public title: string;

    @Column()
    public sum: number;

    @ManyToOne(type => Customer, customer => customer.bills)
    public customer: Customer;
}
