//ES-5

const fs = require("fs");

let whole = fs.readFileSync('emp.txt' , "utf-8")
  fs.writeFileSync("write.txt", "data")
  console.log(whole)