import express from "express";
import dotenv from "dotenv";

let App = express()

dotenv.config({path:"./config/config.env"})
let PORT = process.env.PORT
let HOST = process.env.HOST

App.get("/",(req,res)=>{
    res.send("hello everyone")
})

App.get("/about",(req,res)=>{
    res.send("This is about page")
})

App.listen(PORT,HOST,(err)=>{
    if(err) throw err
    console.log("successfully done")
})