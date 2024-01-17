import React, { useEffect } from 'react'
import GlobalApi from '../Services/GlobalApi'

function Slider() {
    useEffect(()=>{

    },[])

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            
        })
    }
  return (
    <div>Slider</div>
  )
}

export default Slider