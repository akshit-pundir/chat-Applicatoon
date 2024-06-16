import React from 'react'
import {Link} from "react-router-dom"
import './join.css';

const Join = () => {
    const [name,setName]=React.useState("");
    const [room,setRoom]=React.useState("");

  function handleName(evt){
    setName(prev => evt.target.value);
  }
  function handleRoom(evt){
    setRoom(prev => evt.target.value);
  }


    return (
    <div className='joinOuterContainer'>
          <div className='joinInnerContainer'>
              <h1 className='heading'>Join</h1>
            <div> <input type="text" className='joinInput' placeholder='Your Name'  onChange={handleName}/>   </div>
            <div> <input type="text" className='joinInput mt-20' placeholder=' Join Room' onChange={handleRoom} />   </div>

          <Link to={`/chat?name=${name}&room=${room}`}   onClick={ event=>(!name || !room) ? event.preventDefault() : null } >
            <button className='button mt-20' type='submit'> Join Room</button>
          </Link>

          </div>

      </div>
  )
}

export default Join;