import React from 'react'

const HeaderNav = () => {
  const navItem =["DASHBOARD", "PROJECTS", "CUSTOMIZE"]
  return (
    <div className=' flex gap-[16px] items-center'>
      {navItem.map((item, i)=>(
        <button className='font-medium' key={i}>{item}</button>
      ))}
    </div>
  )
}

export default HeaderNav