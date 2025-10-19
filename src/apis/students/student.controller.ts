import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { StudentService } from "./student.service";
import { CreateStudentDto } from "./student.dto";

@Controller('Student')
@ApiTags('Student')
export class StudentController {
    constructor(private readonly studentService: StudentService){}

    @Post()
    create(@Body() dto: CreateStudentDto){
        return this.studentService.create(dto);
    }
}