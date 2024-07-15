import express from "express";
import fs from "fs";

const empRouter = express.Router()

empRouter.get("/read",async (req,res)=>{
    let employees = await getEmployees()
    res.status(200).json(employees)
})


empRouter.post("/create",(req,res)=>{})


empRouter.put("/update/:id",(req,res)=>{})


empRouter.delete("/delete/:id",(req,res)=>{})

let getEmployees =()=>{
    let employees = fs.readFileSync("data.json",'utf-8')
    return JSON.parse(employees)

}
let saveEmployee = ()=>{}

export default empRouter