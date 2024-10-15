import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export const UploadOnCloudinary = async (localfilepath:string) => {
    try { 
        if(!localfilepath){
            return null;
        }
        else{
           const response = await cloudinary.uploader.upload(localfilepath,{
                resource_type: "auto",
            });
            console.log("File hase been uploaded on cloudinary : ",response.url);
            return response;
        }
    }
    catch(error){
        fs.unlinkSync(localfilepath);//to remove the locally saved temp file
        return null;
    }
}


