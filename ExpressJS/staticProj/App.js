import express from "express";
import dotenv from "dotenv";
import path from "path";

const App = express()

let index = path.join(process.cwd(),"data","index.html");
let about = path.join(process.cwd(),"data","about.html");
let services = path.join(process.cwd(),"data","services.html");
let contact = path.join(process.cwd(),"data","contact.html");

dotenv.config({path:"./setting/config.env"})
let port = process.env.PORT
let host = process.env.HOST

App.get("/",(req,res)=>{
    res.sendFile(index,(err)=>{
        if(err) throw err
    })
})

App.get("/about",(req,res)=>{
    res.sendFile(about,(err)=>{
        if(err) throw err
    })
})

App.get("/services",(req,res)=>{
    res.sendFile(services,(err)=>{
        if(err) throw err
    })
})

App.get("/contact",(req,res)=>{
    res.sendFile(contact,(err)=>{
        if(err) throw err
    })
})

App.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`Server running successfully : http://${host}:${port}/`)
})