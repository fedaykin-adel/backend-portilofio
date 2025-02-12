import { IsNotEmpty, IsString, IsUUID } from "class-validator";

// export class Recive
export class ReciveJustId{ 
    @IsNotEmpty()
    @IsUUID()
    id:string; 
}