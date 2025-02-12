import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Education } from './entities/education.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EducationService {
    constructor(
        @InjectRepository(Education) private readonly educationRepository:Repository<Education>,
    ){}

    async getAll(){ 
        return await this.educationRepository.find()
    }
}
