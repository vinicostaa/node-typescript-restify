import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("entrada_produto")
export class EntradaProduto {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public id_produto: number;

    @Column()
    public qtde: number;

    @Column()
    public valor_unitario: number;

    @Column()
    public data_entrada: Date;
}