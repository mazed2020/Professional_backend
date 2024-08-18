import mongoose from "mongoose";
import mongooseAggregetionPaginate from "mongoose-aggregate-paginate-v2"
const videSchema=mongoose.Schema(
    {
    videoFile:{
        type:String, //cloudinary url
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    owner:{
        type:Schema.Type.ObjectId,
        ref:"User"
    },
    tile:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    views:{
        type:Number,
        required:true
    },
    isPulished:{
        type:Boolean,
        required:true
    }

},{timestamp:true});
videSchema.plugin(mongooseAggregetionPaginate);


export const Video=mongoose.model("Video",videSchema);