import { Controller, Get } from '@nestjs/common';
import { ExperiencesService } from './experiences.service';

@Controller('experiences')
export class ExperiencesController {
  constructor(private readonly experiencesService: ExperiencesService) {}

  @Get('public/')
  async getAll(){
    return await this.experiencesService.findAll()
  }
}
