
function DessertItem({ dessert, addToCart, decreaseFromCart, cart, activeItem, setActiveItem }) {
  const cartItem = cart.find(item => item.id === dessert.id);

  const handleItemClick = () => {
    setActiveItem(dessert.id);
  };

  return (
    <div className="lg:w-1/3 md:w-1/3 lg:h-fit border p-2 bg-slate-50" onClick={handleItemClick}>
      <img className="w-full object-cover" src={dessert.image} alt={dessert.name} />
      <div className="relative left-1/4 bottom-5 text-black bg-white w-28 text-center py-2 border-2 rounded-xl hover:bg-red-500 hover:text-white">
        {cartItem && activeItem === dessert.id ? (
          <div className="flex justify-between" onClick={(e) => e.stopPropagation()}>
            <button className="mx-1 w-6 h-6 border rounded-full flex items-center justify-center" onClick={(e) => { e.stopPropagation(); decreaseFromCart(dessert.id); }}>-</button>
            <span>{cartItem.quantity}</span>
            <button className="mx-1 w-6 h-6 border rounded-full flex items-center justify-center" onClick={(e) => { e.stopPropagation(); addToCart(dessert); }}>+</button>
          </div>
        ) : (
          <button onClick={(e) => { e.stopPropagation(); addToCart(dessert); }}>Add to Cart</button>
        )}
      </div>
      <h2>{dessert.name}</h2>
      <p>${dessert.price.toFixed(2)}</p>
    </div>
  );
}

export default DessertItem
