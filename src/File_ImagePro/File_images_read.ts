import path from "path"
import { promises as fs, promises } from 'fs';
// interface Url {
//     filename?:string,
//     width?:string,
//     height?:string
// }
abstract class Url {
    filename?:string;
    width?:string;
    height?:string;

}

export default class File extends Url{
    // here i 
    

    image_thumb: string  = path.resolve(__dirname,'../assets/Thumb_Images');
    
    public async Get_Image_Url(url:Url):Promise<string|null>{
        if(!Url){
            return null 
        }
        if(url.height && url.width){
            path.resolve(this.image_thumb,`${url.filename}_${url.width}__${url.width}_Thumb_image.jpg`)
            let exist_path = await this.Check_Url(path.resolve(this.image_thumb,`${url.filename}_${url.width}__${url.height}_Thumb_image.jpg`));
            if(exist_path){
                return exist_path;
            }
        }
        else {
            let image :string =path.resolve(__dirname,'../assets/images');
            let image_path :string = path.resolve(image,`${url.filename}.jpg`);
            let exist_path =await this.Check_Url(image_path)
            if(exist_path){
                return exist_path;
            }
        }
        return null;
            
    }

    public async Check_Url(Url :string):Promise<string|null>{
        
        // if( fs.access(Url)){
        //     return Url;
        // }
        try{
            await fs.access(Url)
            return Url;
        }catch{
            return null;
        }   
        
        
    }

    
}