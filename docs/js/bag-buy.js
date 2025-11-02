const cart = [];
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartBox = document.querySelector('.cart-box');
const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const checkoutButton = document.getElementById('checkout');

addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const product = e.target.parentElement;
    const name = product.querySelector('h3').textContent;
    const priceText = product.querySelector('p').textContent;
    const price = parseInt(priceText.replace(/[^0-9]/g, '')); // عدد از متن جدا میشه

    cart.push({ name, price });
    updateCart();
  });
});

function updateCart() {
  cartBox.style.display = 'block';
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement('li');
    li.innerHTML = `${item.name} - ${item.price.toLocaleString()} تومان 
      <button onclick="removeItem(${index})">❌</button>`;
    cartItems.appendChild(li);
  });

  totalPriceElement.textContent = `جمع کل: ${total.toLocaleString()} تومان`;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

checkoutButton.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('سبد خرید شما خالی است!');
  } else {
    alert('سفارش شما با موفقیت ثبت شد ✅');
    cart.length = 0;
    updateCart();
    cartBox.style.display = 'none';
  }
});
