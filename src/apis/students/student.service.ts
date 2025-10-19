import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Student } from "./student.entity";
import { Model } from 'mongoose';
import { CreateStudentDto } from "./student.dto";


@Injectable()
export class StudentService {
    constructor(
        @InjectModel(Student.name)
        private studentModel: Model<Student>
    ){}

    async create(dto: CreateStudentDto){
        const student = new this.studentModel(dto);
        return await student.save();
    }
}