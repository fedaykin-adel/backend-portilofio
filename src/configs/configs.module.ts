import { Module, OnModuleInit } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Ability } from "src/abilities/entities/ability.entity";
import { SkillSet } from "src/abilities/entities/skill-set.entity";
import { ConfigService } from "./configs.service";
import { Expirience } from "src/experiences/entities/expirience.entity";
import { Project } from "src/projects/entities/project.entity";
import { Education } from "src/education/entities/education.entity";
@Module({
    imports:[
        TypeOrmModule.forFeature([Ability, SkillSet,Expirience,Project,Education])
    ],
    providers:[ConfigService],
    exports:[ConfigService]
})
export class ConfigModule implements OnModuleInit{ 
    constructor(private readonly configService:ConfigService){}
    async onModuleInit() {
        await this.configService.ensureDefaultSkillSet()
        await this.configService.ensureDefaultAbility()
        await this.configService.ensureDefaultExpiriences()
        await this.configService.ensureDefaultProject()
        await this.configService.ensureDefaultEducation()
    }
}