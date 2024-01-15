import React from 'react'
import logo from './../assets/Disney-Plus.png'
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv } from "react-icons/hi2"
function Header() {
  return (
    <div>
      <img src={ logo } className='w-[80px] md:w-[115px] object-cover'/>
    </div>
  )
}

export default Header