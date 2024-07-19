import mongoose from "mongoose";

let emp_Schema = mongoose.Schema({
    eid:{type:String , required:true},
    ename:String,
    esal:Number
})

let Employee = mongoose.model("employees", emp_Schema)

export default Employee