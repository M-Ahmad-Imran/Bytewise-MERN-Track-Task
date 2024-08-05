import React from 'react'
import './hero.css'
import heroImage from '../Assets/hero.jpeg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="left">
        <h2>Discover Your Style</h2>
        <div>
          <div className="handIcon">
            <p>Shop</p>
            <span className='hand-emoji'>✌</span>
          </div>
          <p>The Latest</p>
          <p>Trends Today!</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection 😍</div>
        </div>
      </div>
      <div className="right">
        <img src={heroImage} alt="Hero Image" />
      </div>
    </div>
  )
}

export default Hero
