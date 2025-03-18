import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expirience } from './entities/expirience.entity';
import { IExperienceRepository } from './expiriences.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExperienceRepository implements IExperienceRepository {
  constructor(
    @InjectRepository(Expirience) 
    private readonly experienceRepository: Repository<Expirience>,
  ) {}

  async findAll(): Promise<Expirience[]> {
    return this.experienceRepository.find({ relations: ['skills'] });
  }
}
