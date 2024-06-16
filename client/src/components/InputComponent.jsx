import React from 'react'
import "./inputComp.css";
const InputComponent = ({mssg,setMssg,sendMessage}) => {
  return (
        <form  className='form'>
            <input type="text"  className='input'
             placeholder=' type a message...'
             value={mssg} 
             onChange={(event)=>setMssg(event.target.value)}
              onKeyDown={ event => event.key ==='Enter'? sendMessage(event):null }
             />
      
            <button className='sendButton' onClick={(e)=>sendMessage(e) }>Send</button>

        </form>



  )
}

export default InputComponent