import dotenv from "dotenv"
import express from "express"
import empRouter from "./routing/empRouter.js"
import mongoose from "mongoose"

const App = express()

dotenv.config({path:"./setting/config.env"})
let port = process.env.PORT
let host = process.env.HOST
let mongoUrl = process.env.MONGO_URL

App.use("/emp",empRouter)

App.get("/",(req,res)=>{
    res.status(200).json({"msg":"root request"})
})

mongoose.connect(mongoUrl , {
    useUnifiedTopology : true,
    useNewUrlParser : true,
} ).then((response)=>{
    console.log("connected successfully")
}).catch((err)=>{
    console.error(err);
    process.exit(1); // stop the node js process if unable to connect to mongodb
})

App.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`server runnning successfully : http://${host}:${port}/`)
})