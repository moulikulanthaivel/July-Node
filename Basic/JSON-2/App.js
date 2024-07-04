import fs from "fs";
import path from "path";
import http from "http";


let App = http.createServer((req,res)=>{
   res.end("<h1>hello world.....</h1>")
    
})

App.listen("7070","127.0.0.1",(err)=>{
    if(err) throw err
    console.log("http://127.0.0.1:8080")
})