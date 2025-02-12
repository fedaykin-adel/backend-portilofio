import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Expirience } from './entities/expirience.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExperiencesService {
    constructor(
        @InjectRepository(Expirience) private readonly experienceRepository:Repository<Expirience>,
    ){}
    async findAll(){
        return await this.experienceRepository.find({relations:['skills']})
    }
}
