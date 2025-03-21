import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AbilitiesModule } from './abilities/abilities.module';
import { ConfigModule } from './configs/configs.module';
import { ExperiencesModule } from './experiences/experiences.module';
import { ProjectsModule } from './projects/projects.module';
import { EducationModule } from './education/education.module';
import * as dotenv from 'dotenv';
import { StorageModule } from './storage/storage.module';
import { AppController } from './app.controler';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, // <-- apenas isto é suficiente!
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV === 'dev',
      logging: process.env.NODE_ENV === 'devx',
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    AbilitiesModule,
    ConfigModule,
    ExperiencesModule,
    ProjectsModule,
    EducationModule,
    StorageModule
  ],
  controllers:[AppController]
})
export class AppModule {}
