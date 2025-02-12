import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { Ability } from './ability.entity';
  
@Entity('skill-set')
export class SkillSet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Ability, ability=>ability.skillSet)
  abilitity: Ability[];
}