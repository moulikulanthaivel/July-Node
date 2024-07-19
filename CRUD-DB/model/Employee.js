import mongoose from "mongoose";

let empSchema = new mongoose.Schema({

    eid : {
        type:Number,
        required:true
        },

    ename : {
        type:String,
        required:true
        },

     salary: {
        type:Number,
        required:true
        }                  
                    
})

let Employee = mongoose.model("employees", empSchema)

export default Employee

