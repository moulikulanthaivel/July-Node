// what is fat arrow function ?
// alternating syntax of creating function.


import fs from "fs";
import http from "http";
import path from "path";
import os from "os";

let index = path.join(process.cwd(),"index.html")
let contact = path.join(process.cwd(),"contact.html")
let service = path.join(process.cwd(),"service.html")
let about = path.join(process.cwd(),"about.html")
let blogs = path.join(process.cwd(),"blogs.html")

let App = http.createServer((req,res)=>{

    if(req.url === "/" || req.url === "/home"){
        fs.readFile(index , "utf-8" , (err,data)=>{
            if(err) throw err
            res.end(data);
        });
    }

    else if(req.url === "/contact"){
        fs.readFile(contact, "utf-8" , (err,data)=>{
            if(err) throw err
            res.end(data)
        })
    }

    else if(req.url === "/about"){
        fs.readFile(about, "utf-8" , (err,data)=>{
            if(err) throw err;
            res.end(data)
        })
    }

    else if(req.url === "/service"){
        fs.readFile(service,"utf-8" , (err,data)=>{
            if(err) throw err;
            res.end(data)
        })
    }

    else if(req.url === "/blogs"){
        fs.readFile(blogs, "utf-8", (err,data)=>{
            if(err) throw err;
            res.end(data)
        })
    }

})

App.listen("8080","127.0.0.1", (err)=>{
    if(err) throw err
    console.log(`http://127.0.0.1:8080`)
})

