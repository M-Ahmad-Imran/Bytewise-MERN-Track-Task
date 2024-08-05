import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../ContextAPI/ShopContext'

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext)
  return (
    <div className='ProductDisplay'>
      <div className="productDisplay-left">
        <div className="imglist">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-image">
          <img className='main-image' src={product.image} alt="" />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="right-prices">
          <div className="old-price">
            ${product.old_price}
          </div>
          <div className="new-price">
            ${product.new_price}
          </div>
        </div>
        <div className="right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Rem quia beatae magnam iusto commodi praesentium porro unde excepturi hic tempora,
          distinctio asperiores saepe quaerat nihil, at neque ipsum? Fugit, distinction!
        </div>
        <div className="right-size">
          <h1>Select Size</h1>
          <div className="right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
          <p className='right-categ'>
            <span>Category :</span>Women, top
          </p>
          <p className='right-categ'>
            <span>Tags :</span>Latest, Modern
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
