import express, { Router } from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import morgan from "morgan";
import empRouter from "./router/empRouter.js";

let App = express()

dotenv.config({path:"./config/dev.env"})

let port = process.env.PORT
let host = process.env.HOST
let mongo_url = process.env.MONGO_URL

App.use(morgan('dev'))  //morgan

App.use("/emp",empRouter)

App.get("/",(req,res)=>{
    res.status(200).json({"msg":"Root request"})
})


App.listen(port,host,(err)=>{
    if(err) throw err
    console.log (chalk.yellowBright(`server running successfully : http://${host}:${port}/`))
})