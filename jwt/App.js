import dotenv from "dotenv"
import jwt from "jsonwebtoken"

dotenv.config({path:"./config/dev.env"})

let s_key = process.env.SECRET_KEY

let payload ={
    uname:"mouli",
    cid : "56jhj",
    password: "hello09876"
}

let token = jwt.sign(payload,s_key)
console.log(token)

let user = jwt.verify(token,s_key)
console.log(user)