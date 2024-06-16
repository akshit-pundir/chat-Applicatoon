import React from 'react'
import ScrollToBottom from "react-scroll-to-bottom";
import Mssg from './Mssg';
import "./messages.css"


const ViewMessages = ({messages,name}) => {
  return (
    <ScrollToBottom className='messages'>
        {messages.map((data,i)=>(
               <div key={i}>
                <Mssg  messages={data} name={name}/>
               </div> 
        ))

        }

    </ScrollToBottom>
  
  )
}

export default ViewMessages