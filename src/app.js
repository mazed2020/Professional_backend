import express from "express"
//import cookiesParser from "cookies-parser";
import cors from "cors";

const app=express();
//checking for cors origin basic set up

/*+++++++++++++++basic configaration start here+++++++++++++++++ */
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}));
//json body accept
app.use(express.json({limit:'16kb'}));
// request for url
app.use(express.urlencoded({
    extended:true,
    limit:'16kb',
}));
//uploaded file will be store the folder
app.use(express.static("public"));
//app.use(cookiesParser());
/*+++++++++++++++basic configaration end here+++++++++++++++ */

export default app;