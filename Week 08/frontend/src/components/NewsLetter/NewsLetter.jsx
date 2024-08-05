import React from 'react'
import './newsLetter.css'

const NewsLetter = () => {
  return (
    <div className='News-Letter'>
      <h1>GET EXCULSIVE OFFERS ON YOUR EMAIL</h1>
      <p>Subscribe to our NEWSLETTER and stay connected</p>
      <div>
        <input type="email" placeholder='Enter your Email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
