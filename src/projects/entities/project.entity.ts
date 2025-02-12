import { Ability } from "src/abilities/entities/ability.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('project')
export class Project{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column() 
    image:string
    
    @Column()
    title:string

    @Column()
    git:string
    
    @Column()
    desc:string

    @Column()
    resume:string

    @Column()
    date:string
    
    @ManyToMany(()=> Ability, {cascade:true})
    @JoinTable()
    tecnologis:Ability[]


    @Column({nullable:true})
    color:string
}