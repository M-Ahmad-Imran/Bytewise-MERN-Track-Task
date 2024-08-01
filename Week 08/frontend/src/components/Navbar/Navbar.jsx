import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {

    const [menu,setMenu] = useState("shop")

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <h1>Apna Store</h1>
        <p>Apna ha yr! 😉</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>setMenu('shop')} className={menu === 'shop' ? 'activePage' : ''}>Shop</li>
        <li onClick={()=>setMenu('books')} className={menu === 'books' ? 'activePage' : ''}>Books</li>
        <li onClick={()=>setMenu('crockery')} className={menu === 'crockery' ? 'activePage' : ''}>Crockery</li>
        <li onClick={()=>setMenu('fashion')} className={menu === 'fashion' ? 'activePage' : ''}>Fashion Accessories</li>
        <li onClick={()=>setMenu('mobile')} className={menu === 'mobile' ? 'activePage' : ''}>Mobile Accessories</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <button>Cart<div className="nav-cart-count">0</div></button>
      </div>
    </div>
  )
}

export default Navbar
