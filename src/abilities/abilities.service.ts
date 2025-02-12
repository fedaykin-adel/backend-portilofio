import { Injectable } from '@nestjs/common';
// import { CreateAbilityDto } from './dto/create-ability.dto';
// import { UpdateAbilityDto } from './dto/update-ability.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ability } from './entities/ability.entity';
import { Repository } from 'typeorm';
import { SkillSet } from './entities/skill-set.entity';

@Injectable()
export class AbilitiesService {
  constructor(
    @InjectRepository(Ability) private readonly abilityRepository:Repository<Ability>, 
    @InjectRepository(SkillSet) private readonly skillSetRepository:Repository<SkillSet>
  ){}
  
  async findAll():Promise<any> {
    const abilities = await this.skillSetRepository.find({relations:["abilitity"]});
    return abilities
  }

  
}
