import React, { createContext, useState } from "react";
import all_product from '../components/Assets/all_product'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

const ShopContextProvider = (props) => {
    const [cartitem, setCartitem] = useState(getDefaultCart())

    const addToCart = (itemID) => {
        setCartitem((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }))
        console.log(cartitem);
    }
    const removeFromCart = (itemID) => {
        setCartitem((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const item in cartitem) {
            if (cartitem[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartitem[item]
            }
        }
        return totalAmount
    }

    const getTotalCartItem = () => {
        let totalItem = 0
        for (const item in cartitem) {
            if (cartitem[item] > 0) {
                totalItem += cartitem[item]
            }
        }
        return totalItem
    }

    const contextValue = { all_product, cartitem, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItem };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider