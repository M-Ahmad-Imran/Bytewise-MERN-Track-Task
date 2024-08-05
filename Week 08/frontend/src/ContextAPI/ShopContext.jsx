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

    const contextValue = { all_product, cartitem, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider