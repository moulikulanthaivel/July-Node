import fs from "fs"

let contain = fs.readFile("data.txt","utf-8",(err,data)=>{
    if(err)  throw err;
    console.log(data)
})
