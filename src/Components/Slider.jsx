import React, { useEffect } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { useState } from 'react';
function Slider() {

  const [movieList,setMovieList]=useState([]);
    useEffect(()=>{
        getTrendingMovies();
    },[])

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results);
            setMovieList(resp.data.results)
            
        })
    }
  return (
    <div>
      
    </div>
  )
}

export default Slider