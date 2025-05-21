import React from 'react'
import user from '../images/illustration-your-users.svg'
function Card3() {
  return (
    <div className='card3'>
     <h2 className='heading'>  Your Users
</h2>
     <p className='para'>
         It takes no time at all to integrate Huddle with your app's <br /> authentication solution. 
  This means, once signed in to <br /> your app, your users can start chatting immediately.
   </p>
  <img src={user} alt="people" className='peo' />
    </div>
  )
}

export default Card3