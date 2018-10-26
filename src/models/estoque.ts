import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class Estoque {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public id_produto: number;

    @Column()
    public qtde: number;

    @Column()
    public valor_unitario: number; 
}