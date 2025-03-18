import { Expirience } from "./entities/expirience.entity";

export interface IExperienceRepository{
    findAll():Promise<Expirience[]>
}