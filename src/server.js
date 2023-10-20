const express = require("express")
const { appendFile } = require("node:fs")
const {createServer} = require("node:http")
const {join} = require("node:path")
const {Server} = require("socket.io")
const router = require("./routes/routes")

const app = express()
const server = createServer(app)
const io = new Server(server)

app.set("view engine", "ejs")

app.get("/register",(req, res) =>{
    res.render("index.ejs")

    io.on("connection", (socket) =>{
        const date = new Date()
        date.getHours()
    
        socket.on("disconnect", () =>{
            console.log("usuario desconectou" + " " + socket.id + " " + date)
    
        })
    
        socket.on("msg", (data) =>{
            io.emit("msg",data)
            console.log(data)
        })
    })
})


app.use("/",router)

server.listen(8080,() =>{
    console.log("Servidor Está Rodando 🚀")
})