import React from 'react';
import bg from '../images/bg-hero-desktop.svg';
import logo from '../images/logo.svg';
import desk from '../images/illustration-mockups.svg';

function Header() {
  return (
    <div className='header'>
     <img src={bg} alt="background" className='bg' />
     <img src={logo} alt="logo" className='logo' />
     <img src={desk} alt="desk" className='desk' />
     <button className='btn'>Try it Free</button>
     <h1 className='heading'>Build The Community <br /> Your Fans Will Love</h1>
     <p className='para'>
  Huddle re-imagines the way we build communities. You have <br /> a voice, but so does your audience. 
  Create connections with <br /> your users as you engage in genuine discussion. </p>
  <button className='btn2'>Get Started For Free</button>
    </div>
  )
}

export default Header