import express from 'express';
import controller from './contoller/index.js';
import { Server } from "socket.io";
import http from 'http';
import mongoose from "mongoose";
import cors from 'cors'
import { socketService } from './services/socketService/messageService.js';


const url = "mongodb://0.0.0.0:27017"
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(controller)

const server = http.createServer(app);
const io = new Server(server , {  cors: {
    origin: ["http://localhost:3000"]
}});


server.listen(PORT, (error) => {
    // mongoose.connect(url, {
    //     dbName: "gd_dev"
    // }).then(() => console.log("connected Successfully"));
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

io.on("connection", (socket) => {
    // setInterval(()=>{
    //     socket.emit("customEvent",new Date().toDateString(),socket.id)
    // },1000)
    socketService(socket)
    console.log("socket Connected");
  });