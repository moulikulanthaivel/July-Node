import bcrypt, { genSalt } from "bcrypt";

// // bcrypt sync

// let user = {
//     "id":101,
//     "name":"mouli",
//     "password": "hellogdygdgu",
//     "ccv":"moulicandy007@gmail.com"
// }
// console.log(user)

// let salt = bcrypt.genSaltSync(10)
// let new_pass = bcrypt.hashSync(user.password,salt)
// let new_ccv = bcrypt.hashSync(user.ccv,salt)

// user = {...user,password:new_pass,ccv:new_ccv}

// console.log(user)
// console.log(user.password)

// let flag = bcrypt.compareSync("hellogdygdgu", user.password)

// flag ? console.log("login success") : console.log("login failed")


// bcrypt async

let employee = {
    id:190087,
    name:"kamesh",
    salary:45000,
    bankAcc:79975789254097,
    password:"helloMOUli"
}
const saltRounds = 10;

console.log(employee)

 const checkName = async(employee , saltRounds)=>{
    
 }






