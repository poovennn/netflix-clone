import React, { useEffect, useState } from 'react'
import axios from './axios'
import request from './request'
import "./Banner.css"

function Banner() {
   const [movies ,setMovies] = useState([])
    

   useEffect(()=>{
       async function getdata(){
           const res = await axios.get(request.fetchNetflixOriginal)
           let x = Math.floor(Math.random()*res.data.results.length-1)
           setMovies(res.data.results[x])
           return request

       }
       getdata();

   },[])

   console.log(movies)
   function truncate(str, n) {
    return str?.length > n ? str.substring(0,n -1) + "..." : str;
}



    return (
        <header
          className="banner"
          style={{
              backgroundSize:"cover",
              backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
              backgroundPosition: "center center",
          }}
        
        >
            <div className="banner_content">

                <h1 className="banner_title">{movies?.name || movies?.title || movies?.original_title}</h1>

                <div className="banner_buttons">
                    
                    <button className="banner_button">Play</button>
                    <button className="banner_button">Mylist</button>
                </div>
                <h1 className="banner_description">{truncate(movies?.overview,150)}</h1>
            </div>
            <div className="banner_shade"/>
         

        </header>
    )
}

export default Banner
