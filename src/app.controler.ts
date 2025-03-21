import { Controller, Get} from "@nestjs/common";
@Controller('')
export class AppController{ 

    @Get('/')
    async addStorage():Promise<string>{
        return "ola mundo"
    }
    
}