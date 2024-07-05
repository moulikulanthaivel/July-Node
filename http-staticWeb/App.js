import http from 'http';

let server = http.createServer((req,res)=>{

    res.end("hello gm")
})

server.listen("8080","127.0.0.1",(err)=>{
    if(err) throw err
    console.log(`http://127.0.0.1:8080`)
})