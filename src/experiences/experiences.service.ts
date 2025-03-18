import { Inject, Injectable } from '@nestjs/common';

import { EXPERIENCE_REPOSITORY } from './experience.constants';
import { IExperienceRepository } from './expiriences.interface';

@Injectable()
export class ExperiencesService {
    constructor(
        @Inject(EXPERIENCE_REPOSITORY) private readonly experienceRepository:IExperienceRepository,
    ){}
    async findAll(){
        return this.experienceRepository.findAll();
    }
}
