import React from "react";
import io from "socket.io-client";
import { useSearchParams } from "react-router-dom";
import "./chat.css"
import InfoBar from "./InfoBar";
import InputComponent from "./InputComponent";
import ViewMessages from "./ViewMessages";
let socket;
const EndPoint = "http://localhost:3000";

const Chat = () => {
  const [search, setSearch] = useSearchParams();
  const [messages,setMessages]=React.useState([]); 
  const [mssg,setMssg]=React.useState(""); 
  const name = search.get("name"); 
  const room = search.get("room");



  React.useEffect(() => {
   socket = io(EndPoint);


    socket.emit("join", { name, room }, () => {});

    // return () => {
    //   socket.emit("disconnect");
    //   socket.off();
    // };
  }, [EndPoint]);

  React.useEffect(()=>{
    socket.on("message",(message)=>{
      setMessages( messages =>  [...messages,message]);

    })
  },[mssg])

// create function for sending mssg
  function sendMessage(e){
    e.preventDefault();
      if(mssg){
         socket.emit('sendMessage' ,mssg, () =>setMssg('') );
      }
  }

  console.log(mssg,messages);

 return(

    <div className="outerContainer">
     <div className="container">
      <InfoBar roomName={room}/>
        <ViewMessages messages={messages} name={name} />
        <InputComponent mssg={mssg} setMssg={setMssg} sendMessage={sendMessage}/>
     </div>

  </div>
)};

export default Chat;
