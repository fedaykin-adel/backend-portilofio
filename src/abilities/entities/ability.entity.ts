import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SkillSet } from './skill-set.entity';

@Entity('ability')
export class Ability {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  image: string;

  @ManyToOne(() => SkillSet, (SkillSet) => SkillSet.abilitity)
  @JoinColumn()
  skillSet: SkillSet;

  @Column({type:"boolean"})
  show_on_ability_tree:boolean
}
