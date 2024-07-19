import express from "express";
import empModels from "../models/employees.js"


let empRouter = express.Router()

empRouter.get("/all",(req,res)=>{
    res.status(200).json({"msg":"all page"})
})

export default empRouter