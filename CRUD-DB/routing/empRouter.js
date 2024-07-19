import express from "express"
import Employee from "../model/Employee.js"

const empRouter = express.Router()

empRouter.get("/all",  (req,res)=>{
    res.status(200).json({"msg":"employee slam"})
} )

empRouter.get("/read", async (req,res)=>{
    let emp = await Employee.find()
    req.status(200).json(emp)
} )

export default empRouter