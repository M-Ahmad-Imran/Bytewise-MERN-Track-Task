import React, { useState, useEffect } from 'react';
import Header from './Component/Header';
import DessertItem from './Component/DessertItem';
import Cart from './Component/Cart';

const desserts = [
  { id: 1, name: 'Waffle with Berries', price: 6.5, image: './src/assets/waffle.jpg' },
  { id: 2, name: 'Vanilla Bean Crème Brûlée', price: 7.0, image: './src/assets/creme-brulee.jpg' },
  { id: 3, name: 'Macaron Mix of Five', price: 8.0, image: './src/assets/macaron.jpg' },
  { id: 4, name: 'Classic Tiramisu', price: 5.5, image: './src/assets/tiramisu.jpg' },
  { id: 5, name: 'Pistachio Baklava', price: 4.0, image: './src/assets/baklava.jpg' },
  { id: 6, name: 'Lemon Meringue Pie', price: 5.0, image: './src/assets/meringue.jpg' },
  { id: 7, name: 'Red Velvet Cake', price: 4.5, image: './src/assets/cake.jpg' },
  { id: 8, name: 'Salted Caramel Brownie', price: 5.5, image: './src/assets/brownie.jpg' },
  { id: 9, name: 'Vanilla Panna Cotta', price: 6.5, image: './src/assets/panna-cotta.jpg' }
];

function App() {
  const [cart, setCart] = useState([]);
  const [activeItem, setActiveItem] = useState(null);

  const addToCart = (dessert) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === dessert.id);
      if (existingItem) {
        return prevCart.map(item => item.id === dessert.id ? { ...item, quantity: item.quantity + 1 } : item);
      } else {
        return [...prevCart, { ...dessert, quantity: 1 }];
      }
    });
    setActiveItem(dessert.id);
  };

  const decreaseFromCart = (id) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === id);
      if (existingItem.quantity === 1) {
        return prevCart.filter(item => item.id !== id);
      } else {
        return prevCart.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item);
      }
    });
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.dessert-item')) {
      setActiveItem(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      return prevCart.filter(item => item.id !== id);
    });
  };

  return (
    <>
      <Header />
      <div className="lg:flex justify-between md:mx-32">
        <div className="flex flex-col w-full">
          <h1 className='py-10 text-5xl font-bold'>Desserts</h1>
          <div className="flex flex-wrap">
            {desserts.map(dessert => (
              <DessertItem
                key={dessert.id}
                dessert={dessert}
                addToCart={addToCart}
                decreaseFromCart={decreaseFromCart}
                cart={cart}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
            ))}
          </div>
        </div>
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </>
  );
}

export default App;
