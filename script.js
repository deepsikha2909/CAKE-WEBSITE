// script.js

let cart = [];

function addToCart(cakeName, price) {
  cart.push({ name: cakeName, price: price });
  alert(`${cakeName} added to cart!`);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-list");
  const totalDisplay = document.getElementById("cart-total");
  cartList.innerHTML = "";

  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });

  totalDisplay.textContent = `Total: ₹${total}`;
}
   