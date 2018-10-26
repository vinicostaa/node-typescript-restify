import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";

@Entity()
export class Produto {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public status: string;

    @Column()
    public descricao: string;

    @Column()
    public estoque_minimo: number;

    @Column()
    public estoque_maximo: number;
}