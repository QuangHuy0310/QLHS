import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsString } from "class-validator";
import { EGender } from "./enum";

export class CreateStudentDto{
    @ApiProperty()
    @IsString()
    name: string

    @ApiProperty()
    @IsString()
    mssv: string

    @ApiProperty()
    @IsEnum(EGender)
    gender: EGender

    @ApiProperty()
    @IsNumber()
    age: number

    @ApiProperty()
    @IsString()
    address: string
}