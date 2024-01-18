import React, { useEffect } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { useState } from 'react';
const IMAGE_BASE_URL="http://image.tmdb.org/t/p/original/";
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
    <div className='flex overflow-x-auto w-full px-16 py-4'>
      {movieList.map((item,index)=>(
        <img src={IMAGE_BASE_URL+item.backdrop_path} className='min-w-full h-[310px] object-cover object-left-top mr-5 rounded-md'/>
      ))}
    </div>
  )
}

export default Slider