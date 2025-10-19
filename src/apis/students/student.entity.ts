import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { EGender } from "./enum";
import { v4 as uuidv4 } from 'uuid';


@Schema({collection: 'students'})
export class Student{
    @Prop({type: String, default: () => uuidv4()})
    _id: string;

    @Prop({type: String, required: true})
    name: string;

    @Prop({type: String, required: true})
    mssv: string;

    @Prop({type: String, required: true})
    gender: EGender;

    @Prop({type: Number, required: true})
    age: number;

    @Prop({type: String, required: true})
    address: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student)