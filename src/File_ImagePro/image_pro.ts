import sharp from "sharp";

//https://sharp.pixelplumbing.com/api-constructor

export default class{
    async processing (
        src :string ,
        dist :string,
        width:number,
        height:number
    ):Promise<null|string>{
        try{
            
            await sharp(src).resize(width,height).toFormat('jpeg').toFile(dist);
            console.log("hello"); 
            return null
        }
        catch{
            return "image can not be resizes !!!";
        }
    }
}
