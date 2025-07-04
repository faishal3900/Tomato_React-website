import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
const Navbar = ({ setShowLogin }) => {

    const [menu, setemenu] = useState("menu")
    const { getTotalCartAmount } = useContext(StoreContext);
    return (
        <div className='Navbar'>
            <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
            <ul children className='navbar-manu'>
                <Link to='/' onClick={() => setemenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                <a href='#explore-menu' onClick={() => setemenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
                <a href='#app-download' onClick={() => setemenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
                <a href='#footer' onClick={() => setemenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt="" />
                <div className='navbar-search-icon'>
                    <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                <button onClick={() => setShowLogin(true)}>sign in</button>
            </div>
        </div>
    )
}

export default Navbar
