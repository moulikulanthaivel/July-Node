import http from "http";
import dotenv from "dotenv";
import fs from "fs"
import path from "path";

dotenv.config({path:"./config/config.env"})
let PORT = process.env.PORT
let HOST = process.env.HOST

let index= path.join(process.cwd(),"server","index.html");
let home= path.join(process.cwd(),"server","home.html");
let about= path.join(process.cwd(),"server","about.html");


const App = http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url === "/" || req.url === "/index"){
        fs.readFile(index, "utf-8" , (err,data)=>{
            if(err) throw err
            console.log(data)
        })
    }

    else if(req.url === "/home"){
        fs.readFile(home, "utf-8", (err,data)=>{
            if(err) throw err
            console.log(data)
        })
    }

    else if(req.url === "/about"){
        fs.readFile(about , "utf-8", (err,data)=>{
            if(err) throw err
            console.log(data)
        })
    }

    else{
        res.end("page not found")
    }
})


App.listen(PORT,HOST,(err)=>{
    if(err) throw err
    console.log(`http://${HOST}:${PORT}`)
})