import fs from "fs";


fs.readFile("users.json" , "utf-8" , (err,data)=>{
    if(err) throw err
    console.log(typeof data)       // string
    let users = JSON.parse(data)
    console.log(typeof users)     // object

    for (const user of users) {
        console.log(user.name)
    }

})



// const fs=require('fs')
// const { json } = require('stream/consumers')
// fs.readFile('users.json','utf-8',(err,data)=>{
//    if(err) throw err 
//    console.log(typeof data)
//    let users = JSON.parse(data)
//    console.log(typeof users)

//    for( user of users){
//     console.log(user.id)
//    }
// })