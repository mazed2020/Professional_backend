import mongoose from "mongoose";
import { dbName } from "../constants.js";


export const dbConnection= async()=>{
    try {
        const connnection=await mongoose.connect(`${process.env.BASE_URL}/${dbName}`);
        console.log(connnection.connection.host);
    } catch (error) {
        console.log(`DB connection error ${error}`);
        process.exit(1);
        
    }

}