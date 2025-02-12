import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
    constructor(
        @InjectRepository(Project) private readonly projectRepository:Repository<Project>,
    ){}

    async getAll(){ 
        return await this.projectRepository.find({relations:['tecnologis']})
    }
}
