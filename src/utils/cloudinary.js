import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

//configaration of cloudinary
cloudinary.config({ 
    cloud_name:process.env.cloud_name, 
    api_key: process.env.API_KEY, 
    api_secret:process.env.SECRETE_kEY // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary=async(tempFilePath)=>{
    try {
        if(!tempFilePath)return null;

        const respose=await cloudinary.uploader.upload(tempFilePath,
            {
                resource_type:"auto"
            })
            fs.unlinkSync(tempFilePath)
            return respose;
        
    } catch (error) {
        fs.unlinkSync(tempFilePath)
        return null;
        
    }
}
export default uploadOnCloudinary;