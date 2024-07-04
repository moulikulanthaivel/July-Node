import fs from "fs";
import path from "path";
import http from "http";
import dotenv from "dotenv"

dotenv.config({"path":"./.env"})

let port = process.env.PORT
let host = process.env.HOST



let App = http.createServer((req,res)=>{
    res.end("<h1>hello</h1>")
})

App.listen(port ,host ,(err)=>{
    if(err) throw err
    console.log(`http://${host}:${port}`)
})