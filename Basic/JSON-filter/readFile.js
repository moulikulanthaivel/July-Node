import fs from "fs";
import path from "path";

let fileName = path.join(process.cwd(),"./Receive/users.json")

fs.readFile(fileName , "utf-8" , (err,data)=>{
    if(err) throw err
    // console.log(typeof data)
    let datas = JSON.parse(data)

    // console.log(typeof datas)

    let male_Users = [];
    let female_Users = [];

    for (user of  datas){
        if(user.gender === "Male"){
            male_Users.push(user)
        }
        else{
            female_Users.push(user)
        }
    }
  
})