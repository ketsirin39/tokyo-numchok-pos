let cart = [];
let total = 0;

function addItem(name, price) {
  cart.push({ name, price });
  total += price;
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cart");
  const totalDisplay = document.getElementById("total");

  cartList.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price} บาท`;
    cartList.appendChild(li);
  });

  totalDisplay.textContent = total;
}

function clearCart() {
  cart = [];
  total = 0;
  renderCart();
}
