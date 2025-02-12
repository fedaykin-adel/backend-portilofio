import { Controller, Inject, Put, UploadedFile, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { StorageService } from "./storage.service";
import { AnyFilesInterceptor } from "@nestjs/platform-express";
import {Multer} from 'multer'
@Controller('storage')
export class StorageController{ 
    constructor(private readonly storageService:StorageService){}
    
    @Put('')
    @UseInterceptors(AnyFilesInterceptor())
    async addStorage(@UploadedFiles() files:Multer.Files[], @UploadedFile() image?:Multer.File):Promise<string | string[]>{
        if(files && files.length > 0){ 
            return await Promise.all(files.map(x=>this.storageService.addFile(x)))
        }
        if(image){
            return await this.storageService.addFile(image)
        }
    }
    
}