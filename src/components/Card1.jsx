import React from 'react'
import peo from '../images/illustration-grow-together.svg'
function Card1() {
  return (
    <div className='card1'>
     <h2 className='heading'>  Grow Together</h2>
     <p className='para'>
  Generate meaningful discussions with your audience and <br /> build a strong, loyal community. 
  Think of the insightful <br /> conversations you miss out on with a feedback form. </p>
  <img src={peo} alt="people" className='peo' />
    </div>
  )
}

export default Card1