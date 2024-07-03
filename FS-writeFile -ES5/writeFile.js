const fs = require("fs");

 fs.readFile("emp.txt","utf-8",(err,data)=>{
    if(err)throw err
    console.log(data)
    
    fs.writeFile("create.txt",data,(err)=>{
        if(err) throw err
        console.log("successfully done")
    })
})