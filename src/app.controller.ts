import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly ser: AppService) {}

  @Get()
  getHello(): string {
    return this.ser.getHello();
  }

  @Get('get-name')
  getName(){
    return this.ser.getName();
  }
}
