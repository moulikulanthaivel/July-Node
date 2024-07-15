import  express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import empRouter from "./router/empRouter.js"

const App = express()

dotenv.config({path:"./setting/dev.config"})
let port = process.env.PORT
let host = process.env.HOST

App.use(morgan('tiny'))

App.use("/emp", empRouter)

App.get("/",(req,res)=>{
    res.status(200).json({"msg":"hello world"})
})

App.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`server running http://${host}:${port}/`)
})