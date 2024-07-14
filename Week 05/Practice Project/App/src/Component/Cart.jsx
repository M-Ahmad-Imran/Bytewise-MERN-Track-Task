import CartItem from './CartItem';
import OrderSummaryModal from './OrderSummary';
import { useState } from "react";

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConfirmOrder = () => {
    
      setIsModalOpen(true);

      const orderDetails = { cart, total };

      fetch('http://localhost:3001/confirm-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails),
      })
        .then(response => response.text())
        .then(data => {
          console.log(data); 
        })
        .catch(error => {
          console.error('Error:', error);
        });
    
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    cart.length = [];
  };

  return (
    <div className="lg:w-1/2 h-fit border p-5 m-8">
      <h2 className='text-4xl py-4 font-bold'>Your Cart ({cart.length})</h2>
      {cart.map(item => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
      <h3>Order Total: ${total.toFixed(2)}</h3>
      <button className='bg-red-500 m-2 p-3 text-white rounded-xl' onClick={handleConfirmOrder}>Confirm Order</button>
      {isModalOpen && <OrderSummaryModal cart={cart} total={total} onClose={handleCloseModal} />}
    </div>
  );
}

export default Cart;