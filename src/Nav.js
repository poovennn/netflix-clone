import React, { useEffect, useState } from 'react'
import netflixlogo from './netflix.png'
import netflixavatar from './Netflix-avatar.png'
import './Nav.css'


function Nav() {

   const [show,handleshow] = useState(false) 
    
   useEffect(()=>{
       window.addEventListener("scroll",()=>{
           if(window.scrollY > 100){
               handleshow(true)
           }else{
               handleshow(false)
           }
       })
       return()=>{
           window.removeEventListener("scroll");
       }

   },[])


    return (
        <div className={`nav ${show && "nav_black"}`}  >
            <img src={netflixlogo}   className="nav_logo" alt="netflixlogo"/>
            <img src={netflixavatar} className="nav_avatar" alt="netflixavatar" />
            
        </div>
    )
}

export default Nav
