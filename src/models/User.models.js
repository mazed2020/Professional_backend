import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const UserSchema=mongoose.Schema({
    userName:{
        type:String,
        required:[true,"Enter your name "],
        trim:true,
        unique:true,
        index:true,
        lowercase:true,
    },
   email:{
        type:String,
        required:[true,"Enter your name "],
        trim:true,
        unique:true,
        lowercase:true,
    },
    fullName:{
            type:String,
            required:[true,"Enter your name "],
            trim:true,
            unique:true,
            lowercase:true,
    },
    avatar:{
        type:String,//cloudinary URL
        required:true,
    },
    coverPage:{
        type:String //cloudinary url
    },
    watchHistory:{
        type:Schema.Types.ObjectId,
        ref:"video"
    },
    password:{
        type:String,
        required:[true,"enter your password"],
    },
    refreshToken:{
        type:String
    }



},{timestamp:true});


UserSchema.pre("save",async function(next){
    if(!this.isModified("password"))return next();
    this.password= bcrypt.hash(this.password,10);
    next();

})

UserSchema.methods.isPasswordCorrect=async function(password){
    return  await bcrypt.compare(password,this.password);
};
UserSchema.methods.generateWebToken=function(){
   return jwt.sign(
{
    _id:this._id,
    userName:this.userName,
    email:this.email

},process.env.SECRETE_kEY,{
        expiresIn:process.env.EXPIERY_KEY
    })
}


UserSchema.methods.refreshToken=function(){
    return jwt.sign({_id:this._id},process.env.REFRESH_TOKEN_SECRE,{
        expiresIn:process.env.REFRESH_EXPIERE
    })
}


export const User=mongoose.model("User",UserSchema);