import React from 'react'
import './Header.css';
const Header = () => {
  return (
    <div className='heading'>
        <h1>React TODO <span className='italic secondary-color'>app</span> ...</h1>
        <p className='italic secondary-color'>"Todo Summary Assistant..."</p>
    </div>
  )
}

export default Header
