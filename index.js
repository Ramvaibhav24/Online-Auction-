document.addEventListener('DOMContentLoaded', function() {
    let cart = [];

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const item = this.parentElement;
            const itemId = item.getAttribute('data-id');
            const itemName = item.querySelector('h3').innerText;
            const itemPrice = item.querySelector('p').innerText;

            cart.push({ id: itemId, name: itemName, price: itemPrice });
            updateCart();
        });
    });

    function updateCart() {
        const cartItemsList = document.getElementById('cart-items');
        cartItemsList.innerHTML = '';
        
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${item.name} - ${item.price}`;
            cartItemsList.appendChild(listItem);
        });

        if (cart.length > 0) {
            document.getElementById('checkout-btn').style.display = 'block';
        } else {
            document.getElementById('checkout-btn').style.display = 'none';
        }
    }

    document.getElementById('checkout-btn').addEventListener('click', function() {
        document.querySelector('.cart').style.display = 'none';
        document.querySelector('.delivery-form').style.display = 'block';
    });

    const deliveryForm = document.getElementById('delivery-form');
    deliveryForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const paymentMethod = document.getElementById('payment').value;

        alert(`Thank you, ${name}! Your items will be shipped to ${address}. Payment method: ${paymentMethod}.`);

        cart = [];
        updateCart();
        document.querySelector('.delivery-form').style.display = 'none';
    });
});