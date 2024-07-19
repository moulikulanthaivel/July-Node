import express from "express";



let empRouter = express.Router()

empRouter.get("/all",(req,res)=>{
    res.status(200).json({"msg":"all page"})
})

export default empRouter