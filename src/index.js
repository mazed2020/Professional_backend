import { dbConnection } from "./db/connection.js";
import app from "./app.js"
//import env file in emidiate invoke
import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})

dbConnection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`apps running on ${process.env.PORT}`);
    }) 
}).catch((err)=>{
    console.log(`db connenction error is ${err}`);

})