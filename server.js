const express = require("express");
const server = express();

//configurar servidor para mostrar arquivos estaticos
server.use(express.static("public"))

//habilitar body do formulario 
server.use(express.urlencoded({extended:true}))

//configurando a template engine 
const nunjucks = require("nunjucks");

nunjucks.configure("./",{
    express: server,
    noCache: true
})

//lista de doadores: Vetor ou array
const donors  = [
    {
        name:"Vinicius Dos Santos",
        blood:"AB+"
    },
    {
        name:"Ana Claudia",
        blood:"A+"
    },
    {
        name:"Robson Dos Santos",
        blood:"B+"
    },
    {
        name:"Robinho Fenomeno",
        blood:"O+"
    }
]

//configura a exibição da pagina
server.get("/", function(req,res){
    return res.render("index.html", {donors})
})

server.post("/", function(req, res){
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

//colocar valores dentro do array
    donors.push({
        name:name,
        blood:blood
    })
    return res.redirect("/")
})

// ligar o servidor e liberar o acesso a porta 3000
server.listen(3000, function(){
    console.log("servidor iniciado")
})