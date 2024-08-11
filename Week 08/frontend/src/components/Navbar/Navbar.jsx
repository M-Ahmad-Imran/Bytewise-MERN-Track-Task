import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { ShopContext } from '../../ContextAPI/ShopContext'

const Navbar = () => {

  const [menu, setMenu] = useState("shop")
  const { getTotalCartItem } = useContext(ShopContext)


  return (
    <div className='navbar'>
      <div className="nav-logo">
        <h1>Apna Store</h1>
        <p>Apna ha yr! 😉</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu('shop')}
          className={menu === 'shop' ? 'activePage' : ''}>
          <Link to={'/'}>Shop</Link>
        </li>
        <li onClick={() => setMenu('books')}
          className={menu === 'books' ? 'activePage' : ''}>
          <Link to={'/books'}>Books</Link>
        </li>
        <li onClick={() => setMenu('crockery')}
          className={menu === 'crockery' ? 'activePage' : ''}>
          <Link to={'/crockrey'}>Crockery</Link>
        </li>
        <li onClick={() => setMenu('fashion')}
          className={menu === 'fashion' ? 'activePage' : ''}>
          <Link to={'/fashion-accessories'}>Fashion</Link>
        </li>
        <li onClick={() => setMenu('mobile')}
          className={menu === 'mobile' ? 'activePage' : ''}>
          <Link to={'/mobile-accessories'}>Mobile Accessories</Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to={'/login'}><button>Login</button></Link>
        <Link to={'/cart'}>
          <button>Cart<div className="nav-cart-count">{getTotalCartItem()}</div></button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
