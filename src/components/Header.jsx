import React, {useState} from 'react'
import "./Styles/Style.css"
import logo from "../assets/logo.png"
import cover from "../assets/bg-cover.png"

function Header() {
    const [nav, setNav] = useState(false);
    const changeBackground = () =>{
        if(window.scrollY >= 50){
            setNav(true);
        }else{
            setNav(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
    <div id='header'>
        <div id="cover">
            <img src={cover} alt="cover"/>
        </div>
        <div id='header-div' className={nav ? "nav-active" : "nav"}>
        <div id="logo">
            <img src={logo} alt="logo" />
        </div>
        <div id="header-items">
            <ul>
                <li>Fitness</li>
                <li>Nutrition</li>
                <li id='gyms'>Gyms</li>
                <li>Become WTF Partner</li>
                <li>About Us</li>
                <li><button className='btn'>Login</button></li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Header