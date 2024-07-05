document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const payButton = document.getElementById('pay-button');
    const popupElement = document.createElement('div');

    popupElement.classList.add('popup');
    popupElement.textContent = "You successfully paid!✌";
    document.body.appendChild(popupElement);

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const itemName = button.getAttribute('data-name');
            const itemPrice = parseFloat(button.getAttribute('data-price'));
            addItemToCart(itemName, itemPrice);
        });
    });

    payButton.addEventListener('click', () => {
        clearCart();
    });

    function addItemToCart(name, price) {
        const cartItem = cartItems.find(item => item.name === name);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cartItems.push({ name, price, quantity: 1 });
        }
        updateCart();
    }

    function removeItemFromCart(name) {
        const cartItemIndex = cartItems.findIndex(item => item.name === name);
        if (cartItemIndex > -1) {
            cartItems.splice(cartItemIndex, 1);
        }
        updateCart();
    }

    function updateCart() {
        cartItemsElement.innerHTML = '';
        let total = 0;

        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
            
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-from-cart');
            removeButton.addEventListener('click', () => {
                removeItemFromCart(item.name);
            });

            listItem.appendChild(removeButton);
            cartItemsElement.appendChild(listItem);

            total += item.price * item.quantity;
        });

        totalPriceElement.textContent = total.toFixed(2);
    }

    function clearCart() {
        if(cartItems.length !== 0){
            popupElement.classList.add('active');
            setTimeout(() => {
                popupElement.classList.remove('active');
            }, 3000);
        }
        cartItems.length = 0;
        updateCart();
    }
});
