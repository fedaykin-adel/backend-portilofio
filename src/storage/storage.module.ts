import { Module } from "@nestjs/common";
import { StorageService } from "./storage.service";
import { StorageController } from "./storage.controler";

@Module({ 
    imports:[],
    controllers:[StorageController], 
    providers:[StorageService],
    exports:[StorageService]
})
export class StorageModule{}