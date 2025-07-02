import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
const Header = () => {


  const backgroundStyle = {
    backgroundImage: `url(${assets.header_img})`,
  }

  return (
    <div className='header' style={backgroundStyle}>
      <div className='header-contents'>
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes. crafted with the finest ingredients and culinary expertise. our mission is to stisty your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <button>view menu</button>
      </div>
    </div>
  )
}

export default Header
