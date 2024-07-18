import express from "express"

const empRouter = express.Router()

empRouter.get("read/", (req,res)=>{
    res.status(200).json({"msg":"its a read file"})
} )

export default empRouter