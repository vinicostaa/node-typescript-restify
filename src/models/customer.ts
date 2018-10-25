import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {Bill} from './bill';

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;

    @OneToMany(type => Bill, bill => bill.customer)
    public bills: Bill[];
}
