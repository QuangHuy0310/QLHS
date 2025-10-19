import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { mongodbConfig } from './utils/configs/database.config';
import { StudentModule } from './apis/students/student.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      isGlobal: true,
      envFilePath: '.env'
    }),
    MongooseModule.forRootAsync({
      useFactory: mongodbConfig
    }),
    StudentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
