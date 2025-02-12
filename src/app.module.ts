import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AbilitiesModule } from './abilities/abilities.module';
import { ConfigModule } from './configs/configs.module';
import { ExperiencesModule } from './experiences/experiences.module';
import { ProjectsModule } from './projects/projects.module';
import { EducationModule } from './education/education.module';
import * as dotenv from 'dotenv';
import { StorageModule } from './storage/storage.module';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV === 'dev', // Apenas em dev para evitar perda de dados
      logging: process.env.NODE_ENV === 'devx',
    }),
    AbilitiesModule,
    ConfigModule,
    ExperiencesModule,
    ProjectsModule,
    EducationModule,
    StorageModule
  ]
})
export class AppModule {}
