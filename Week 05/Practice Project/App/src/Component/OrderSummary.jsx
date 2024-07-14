
function OrderSummaryModal({ cart, total, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded shadow-lg lg:w-1/2 w-96">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <ul>
          {cart.map(item => (
            <li key={item.id} className="flex justify-between py-2">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-bold mt-4">Total: ${total.toFixed(2)}</h3>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>
  );
}

export default OrderSummaryModal;
