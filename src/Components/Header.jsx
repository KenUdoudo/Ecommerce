import React from 'react'
import logo from './../assets/Disney-Plus.png'
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv, 
    HiPlus} from "react-icons/hi2"
function Header() {
  const menu=[
    {
      name: 'HOME',
      icon:HiHome
    },
    {
      name: 'SEARCH',
      icon:HiMagnifyingGlass
    },
    {
      name: 'WATCH LIST',
      icon:HiPlus
    },
    {
      name: 'ORIGINALS',
      icon:HiStar
    },
    {
      name: 'MOVIES',
      icon:HiPlayCircle
    },
    {
      name: 'SERIES',
      icon:HiTv
    },
  ]
  return (
    <div>
      <img src={ logo } className='w-[80px] md:w-[115px] object-cover'/>
    </div>
  )
}

export default Header