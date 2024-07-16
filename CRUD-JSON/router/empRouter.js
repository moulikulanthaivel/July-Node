import express from "express";
import fs from "fs";

const empRouter = express.Router()

empRouter.get("/read",async (req,res)=>{
    let employees = await getEmployees()
    res.status(200).json(employees)
})


empRouter.post("/create", async (req,res)=>{
  let emp_Data = req.body;
  console.log(emp_Data)
  let employees = getEmployees()

  let flag = employees.find((emp)=>{
    return emp_Data === emp.id
  })

  if(flag){
    return res.json({'error':'employee exist alread'})
  }
  employees.push(emp_Data)
  await saveEmployee(employees);
  return res.status(200).json({"msg":"new employee created successfully "})

})


empRouter.put("/update/:id",(req,res)=>{})


empRouter.delete("/delete/:id",(req,res)=>{})

let getEmployees =()=>{
    let employees = fs.readFileSync("data.json",'utf-8')
    return JSON.parse(employees)

}
let saveEmployee = (employees)=>{
    fs.writeFileSync("data.json", JSON.stringify(employees))
}

export default empRouter