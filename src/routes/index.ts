import express, { response } from "express"
import img from "./api/Img_Route";

const routes =express.Router();

routes.get("/",(request,recponce)=>{
    recponce.send("hello main routes");
})

routes.use("/images",img);
export default routes;
