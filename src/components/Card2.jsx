import React from 'react'
import flow from '../images/illustration-flowing-conversation.svg'

function Card2() {
  return (
    <div className='card2'>
     <h2 className='heading'>  Flowing Conversations</h2>
     <p className='para'>
  You wouldn't paginate a conversation in real life, so why do <br /> it online? Our threads 
  have just-in-time loading for a more <br /> natural flow.
</p>
  <img src={flow} alt="people" className='peo' />
    </div>
  )
}

export default Card2