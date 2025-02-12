import { InjectRepository } from "@nestjs/typeorm";
import { Ability } from "src/abilities/entities/ability.entity";
import { SkillSet } from "src/abilities/entities/skill-set.entity";
import { Repository } from "typeorm";
import { abilitysDefault } from "./data/abilitys.data";
import { experiencesDefault } from "./data/expirience.data";
import { Expirience } from "src/experiences/entities/expirience.entity";
import { Project } from "src/projects/entities/project.entity";
import { projectDefault } from "./data/project.data";
import { defaultEducation } from "./data/edutacion.data";
import { Education } from "src/education/entities/education.entity";
export class ConfigService{
    constructor(
        @InjectRepository(Ability) private readonly abilityRepository:Repository<Ability>,
        @InjectRepository(SkillSet) private readonly skillSetRepository:Repository<SkillSet>,
        @InjectRepository(Expirience) private readonly expirienceRepository:Repository<Expirience>,
        @InjectRepository(Project) private readonly projectRepository:Repository<Project>, 
        @InjectRepository(Education) private readonly educationRepository:Repository<Education>
    ){
    }
    async ensureDefaultSkillSet(){
        const defaultConfig = [
            {id:"d4dbe8a6-9106-4179-842b-b3663a359012",name:"Programming Languages"},
            {id:"088a4ae1-9127-4cb4-b4f7-e60dcf17e5ca",name:"Web"},
            {id:"16370ddf-f8c1-4647-b4ca-9dd48cdc27bb",name:"Databases"},
            {id:"ac41a787-c958-4514-a3cc-4450df3f8cc2",name:"Frameworks/Libs"},
            {id:"a14fd59c-ca21-46c2-80c5-aa389d8dd9ec",name:"Contêineres"},
            {id:"94e10c4d-e5a0-4c9b-969e-61eb3563bdb0",name:"teste"},
        ]
        for (const config of defaultConfig){
            const exists = await this.skillSetRepository.findOne({where:{name:config.name}})
            if(!exists){
                await this.skillSetRepository.save(config)
            }
        }
    }
    async ensureDefaultAbility(){
        for(const data of abilitysDefault){ 
            const exists = await this.abilityRepository.findOne({where:{name:data.name}})
            if(!exists){
                const skillSet = await this.skillSetRepository.findOne({where:{id:data.skillSet}})
                const dataInsert = await this.abilityRepository.create({ 
                    name:data.name, 
                    image:data.image, 
                    skillSet:skillSet, 
                    show_on_ability_tree:data.show_on_ability_tree
                })
                await this.abilityRepository.save(dataInsert)
            }

        }   
    }
    async ensureDefaultExpiriences(){
        for(const data of experiencesDefault){ 
            const exists = await this.expirienceRepository.findOne({where:{company_name:data.company}})
            if(!exists){
                let abilities = []
                
                for(const skill of data.skills){ 
                    let data  = await this.abilityRepository.findOne({where:{name:skill.title}})
                    if(!data){ 
                        console.warn(`não foi encontrado ${skill.title}`)
                    }
                    abilities.push(data)
                }

                const dataInsert = await this.expirienceRepository.create({   
                    company_name:data.company,
                    image_company:data.imageCompany,
                    position:data.cargo,
                    dateIn:data.dateIn,
                    dateAt:data.dateAt,
                    resume:data.resume,
                    skills:abilities,
                    localwork:data.localwork
                })
                
                await this.expirienceRepository.save(dataInsert)
            }

        }   
    }
    async ensureDefaultProject(){
        for(const data of projectDefault){ 
            const exists = await this.projectRepository.findOne({where:{title:data.title}})
            if(!exists){
                let abilities = []
                
                for(const skill of data.tecnologis){ 
                    let data  = await this.abilityRepository.createQueryBuilder('ability').where('LOWER(ability.name) = LOWER(:name)', {name:skill.title}).getOne();
                    if(!data){ 
                        console.warn(`não foi encontrado ${skill.title}`)
                    }
                    abilities.push(data)
                }

                const dataInsert = await this.projectRepository.create({   
                    title:data.title,
                    image:data.image,
                    git:data.git,
                    desc:data.desc,
                    resume:data.resume,
                    date:data.date,
                    tecnologis:abilities,
                    color:data.color
                })
                await this.projectRepository.save(dataInsert)
            }

        }
    }
    async ensureDefaultEducation(){
        for (const config of defaultEducation){
            const exists = await this.educationRepository.findOne({where:{curso:config.curso}})
            if(!exists){
                await this.educationRepository.save(config)
            }
        }
    }
}