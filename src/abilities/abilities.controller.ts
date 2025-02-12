import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AbilitiesService } from './abilities.service';
import { CreateAbilityDto } from './dto/create-ability.dto';
import { UpdateAbilityDto } from './dto/update-ability.dto';
import { Ability } from './entities/ability.entity';

@Controller('abilities')
export class AbilitiesController {
  constructor(private readonly abilitiesService: AbilitiesService) {}

  // @Post()
  // create(@Body() createAbilityDto: CreateAbilityDto) {
  //   return this.abilitiesService.create(createAbilityDto);
  // }
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAbilityDto: UpdateAbilityDto) {
  //   return this.abilitiesService.update(+id, updateAbilityDto);
  // }

  @Get('public/')
  async findAll():Promise<any> {
    return await this.abilitiesService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.abilitiesService.findOne(+id);
  // }


 
}
