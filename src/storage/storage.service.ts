import { Injectable } from "@nestjs/common";
import { put } from '@vercel/blob';
import {Multer} from 'multer'
@Injectable()
export class StorageService{
    constructor(
        
    ){}
    async addFile(image:Multer.File, replaceExisting:boolean = false){ 
        let pathname = `images/${image.originalname}`
        const { url } = await put(pathname,image, { access: 'public' });
        return url
    }
}