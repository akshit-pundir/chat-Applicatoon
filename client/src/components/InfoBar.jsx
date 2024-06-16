import React from 'react'
import "./info.css";
import status from "../assets/status.png";
const InfoBar = ({roomName}) => {
  return (

    <div className='infoBar'>
        <div className='leftInnerContainer'>
              <img src={status} className='onlineIcon' alt="" />     
            <h3>{roomName}</h3>
        </div>
        <div className='rightInnerContainer'>
        <a href="/" style={{color:'white',textDecoration:'none'}}>X </a>
        </div>
   

    </div>
 
);

}

export default InfoBar