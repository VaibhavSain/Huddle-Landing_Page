import React from 'react'
import logo from '../images/Group.svg'
import loc from '../images/icon-location.svg'
import pho from '../images/icon-phone.svg'
import ema from '../images/icon-email.svg'
function Footer() {
  return (
    <div className='footer'>
        <img src={logo} alt="logo" className='logo' />
        <p className='para'>
  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br />
  incididunt ut labore et dolore magna aliqua
</p>
<ul  className='detail'>
  <li>+1-543-123-4567</li>
 <li className='loc2'>example@huddle.com</li>
</ul>
<ul className='icons'>
  <img src={loc} alt="location" className='loc'/>
  <img src={pho} alt="phone" />
  <img src={ema} alt="email" />
</ul>
<ul className='list'>
  <li>About Us</li>
  <li>What We Do</li>
  <li>FAQ</li>
</ul>
<ul className='list list2'>
  <li>Career</li>
  <li>Blog</li>
  <li>Contact Us</li>
</ul>
<p className='copy'> &copy;Copyright 2018 Huddle.All right reserved.</p>
    </div>
  )
}

export default Footer