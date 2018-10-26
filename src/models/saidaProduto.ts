import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("saida_produto")
export class SaidaProduto {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public id_produto: number;

    @Column()
    public qtde: number;

    @Column()
    public valor_unitario: number;

    @Column()
    public data_saida: Date;
}