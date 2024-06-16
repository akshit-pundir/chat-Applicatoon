const express=require("express");
const SocketIo=require("socket.io");
const app=express();
const {addUser,removeUser,getUsers,getUserInRoom}=require("./User");

const port=process.env.PORT || 3000;

const server=app.listen(port,()=>{
    console.log("listening to port 3000");
});

// app.get("/",(req,res)=>{
//     res.send("server is running");
// })


const io=new SocketIo.Server(server,{
    cors:{
        origin:["http://localhost:5173"]
    }
});

io.on("connection", socket =>{
    console.log("A USER IS CONNECTED!");
    
// listening
    socket.on("join",({name,room} , callBack)=>{
        
        const {error,user}=addUser( {id:socket.id ,name , room} );
        
        if(error){ return callBack(error); }
        
        socket.emit("message",{user:'ADMIN',text:`welcome to the room ${user.room} `});
        socket.broadcast.to(user.room).emit("message",{user:"ADMIN",text:`${user.name} has joined the room`});

        socket.join(user.room);
        // console.log(user.room);

        callBack();
    });

    socket.on("sendMessage", (message,callBack)=>{
        const user=getUsers(socket.id);
        io.to(user.room).emit("message",{user:user.name,text:message});

        callBack();
    });

  


    socket.on("disconnect",()=>{
        console.log("the user is disconnected");
        const user = removeUser(socket.id);
        if(user) {
            io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
            io.to(user.room).emit('roomData', { room: user.room, users: getUserInRoom(user.room)});}


    });

}  );





