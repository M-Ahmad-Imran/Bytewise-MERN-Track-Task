import React from 'react';

function CartItem({ item, removeFromCart }) {
  return (
    <div className="flex justify-center items-center gap-1 mb-2">
      <span className='w-full flex justify-between'>
        <span>{item.quantity} x</span>
        <span>{item.name}</span>
        <span>${item.price.toFixed(2)}</span>
      </span>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;
