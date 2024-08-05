import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../ContextAPI/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const { all_product, cartitem, removeFromCart } = useContext(ShopContext)
    return (
        <div className='CartItems'>
            <div className="cartItem-mainFormat">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartitem[e.id] > 0) {
                    return(
                    <div key={e.id}>
                        <div className="cartIrm-format cartItem-mainFormat">
                            <img className='cartIcon-Product' src={e.image} alt="" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartItem-quantity'>{cartitem[e.id]}</button>
                            <p>${e.new_price*cartitem[e.id]}</p>
                            <img className='cartItm-remove' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>)
                }
                return null;
            })}
            <div className="cartItem-down">
                <div className="cartTotal">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartItem-total">
                            <p>Subtotal</p>
                            <p>${0}</p>
                        </div>
                        <hr />
                        <div className='cartItem-total'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartItem-total">
                            <h3>Total</h3>
                            <h3>${0}</h3>
                        </div>
                    </div>
                    <button>
                        Proceed To Check Out
                    </button>
                </div>
                <div className="cartItems-promocode">
                    <p>If you have a promo code Enter here</p>
                    <div className="cartItem-Promobox">
                        <input type="text" placeholder='PromoCode' name="" id="" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
