import { Module } from '@nestjs/common';
import { ExperiencesService } from './experiences.service';
import { ExperiencesController } from './experiences.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expirience } from './entities/expirience.entity';
import {EXPERIENCE_REPOSITORY} from './experience.constants'
import { ExperienceRepository } from './experience.repository';
@Module({
  imports: [TypeOrmModule.forFeature([Expirience])], // ✅ Importando entidade correta
  providers: [
    ExperiencesService,
    {
      provide: EXPERIENCE_REPOSITORY, // ✅ Criando injeção de dependência
      useClass: ExperienceRepository,
    },
  ],
  exports: [ExperiencesService],
  controllers:[ExperiencesController]
})
export class ExperiencesModule {}