import React from 'react'

function HeaderItem({name,Icon}) {
  return (
    <div className='font-[600] flex items-center gap-3 text-[15px] cursor-pointer'>
        <Icon />
        <h2>{name}</h2>
    </div>
  )
}

export default HeaderItem