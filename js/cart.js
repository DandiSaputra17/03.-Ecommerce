const CartItems = document.querySelector(".cart-items");

function displayCartItems() {
  const items = JSON.parse(localStorage.getItem("cart")) || [];

  if (items.length === 0) {
    // Saat Keranjang kosong
    CartItems.innerHTML = "<p>Your cart is empty</p>";
    return;
  }

  items.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart_item";
    cartItem.innerHTML = `
      <p class="cart_id">${item.id}</p>
      <p class="cart_title">${item.title}</p>
      <img src="${item.image}" alt="${item.title}" class="cart_img">
      <p class="cart_price">${item.price}</p>
      <button data-itemid="${item.id}" class="cart_remove">Delete</button>
    `;
    CartItems.appendChild(cartItem);
  });
}

function removeCartItem(itemId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((item) => item.id !== itemId);
  localStorage.setItem("cart", JSON.stringify(cart));

  // Delete Item and Update Item
  CartItems.innerHTML = "";
  displayCartItems();
}

// Initial display of cart items
displayCartItems();

// Action for delete buttons
CartItems.addEventListener("click", function (event) {
  if (event.target.classList.contains("cart_remove")) {
    const itemId = event.target.getAttribute("data-itemid");
    removeCartItem(itemId);
  }
});
