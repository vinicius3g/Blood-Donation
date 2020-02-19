const express = require("express");
const server = express()

server.get("/", function(req,res){
    return res.send("tudo certo até aqui")
})

server.listen(3000, function(){
    console.log("servidor iniciado")
})