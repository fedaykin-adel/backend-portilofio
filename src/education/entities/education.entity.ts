import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('education')
export class Education{
    @PrimaryGeneratedColumn()
    id:string

    @Column()
    university:string
    
    @Column()
    curso:string
    
    @Column({nullable:true})
    imageCompany:string
    
    @Column()
    dateIn:string

    @Column()
    dateAt:string
    
    @Column()
    resume:string

    @Column({type:'simple-array'})
    localwork:string[]
}