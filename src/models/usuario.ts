import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("usuario")
export class Usuario {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public login: string;

    @Column()
    public senha: string;

    @Column()
    public nome: string;
}