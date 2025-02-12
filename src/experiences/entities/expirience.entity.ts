import { Ability } from "src/abilities/entities/ability.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('expirience')
export class Expirience{
    @PrimaryGeneratedColumn('uuid')
    id:string; 

    @Column()
    company_name:string; 

    @Column()
    image_company:string; 
    
    @Column()
    position:string;

    @Column()
    dateIn:string

    @Column()
    dateAt:string
    
    @Column()
    resume:string

    @Column({type:'simple-array'})
    localwork:string[]

    @ManyToMany(()=>Ability, { cascade: false })
    @JoinTable()
    skills:Ability[]
}