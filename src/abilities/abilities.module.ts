import { Module } from '@nestjs/common';
import { AbilitiesService } from './abilities.service';
import { AbilitiesController } from './abilities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ability } from './entities/ability.entity';
import { SkillSet } from './entities/skill-set.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Ability, SkillSet])
  ],
  controllers: [AbilitiesController],
  providers: [AbilitiesService],
})
export class AbilitiesModule {}
