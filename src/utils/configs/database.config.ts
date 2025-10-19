import { MongooseModuleOptions } from "@nestjs/mongoose";

export const mongodbConfig = (): MongooseModuleOptions => ({
    uri: process.env.MONGO_URI,
})