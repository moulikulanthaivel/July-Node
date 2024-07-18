 "})

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