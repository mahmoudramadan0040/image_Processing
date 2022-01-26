import express, { response } from "express";
import File from "../../File_ImagePro/File_images_read";
import Save from '../../File_ImagePro/Save_Thumb';
const img = express.Router();

img.get("/",async(request,responce)=>{
    let dir = new File();
    let save_img =new Save()
    
    try {
        await save_img.Save_Thumb(request.query);
    }
    catch{
    }


    
    let image_Path =await dir.Get_Image_Url(request.query);
    if(image_Path){
        responce.sendFile(image_Path);
    }
    else{
        responce.send("please input valid name of image");
    }

   
 
})

export default img;