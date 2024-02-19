const items = [
    { id: 1, name: 'lunette de vue', price: 100, image: 'src/image1.jpg', liked: false, quantity: 1 },
    { id: 2, name: 'lunette de vue', price: 120, image: 'src/image2.jpg', liked: false, quantity: 1 },
    { id: 3, name: 'lunette de vue', price: 230, image: 'src/image3.webp', liked: false, quantity: 1 }
  ];
  
  function renderShoppingCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';
  
    items.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
  
      const itemImage = document.createElement('img');
      itemImage.src = item.image;
  
      const itemName = document.createElement('span');
      itemName.textContent = item.name;
  
      const quantityInput = document.createElement('input');
      quantityInput.type = 'number';
      quantityInput.value = item.quantity;
      quantityInput.min = 1;
  
      const increaseButton = createButton('+', () => increaseQuantity(item));
      const decreaseButton = createButton('-', () => decreaseQuantity(item));
      const likeButton = createButton('❤️', () => toggleLike(item));
      const deleteButton = createButton('Delete', () => deleteItem(item));
  
      const totalPrice = document.createElement('span');
      totalPrice.textContent = `$${item.price * item.quantity}`;
  
      cartItem.appendChild(itemImage);
      cartItem.appendChild(itemName);
      cartItem.appendChild(quantityInput);
      cartItem.appendChild(increaseButton);
      cartItem.appendChild(decreaseButton);
      cartItem.appendChild(likeButton);
      cartItem.appendChild(deleteButton);
      cartItem.appendChild(totalPrice);
  
      cartContainer.appendChild(cartItem);
    });
  
    const totalContainer = document.getElementById('total-container');
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalContainer.textContent = `Total: $${total}`;
  }
  
  function createButton(text, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', onClick);
    return button;
  }
  
  function increaseQuantity(item) {
    item.quantity++;
    renderShoppingCart();
  }
  
  function decreaseQuantity(item) {
    if (item.quantity > 1) {
      item.quantity--;
    }
    renderShoppingCart();
  }
  
  function toggleLike(item) {
    item.liked = !item.liked;
    renderShoppingCart();
  }
  
  function deleteItem(item) {
    items.splice(items.indexOf(item), 1);
    renderShoppingCart();
  }
  
  // Initial rendering of the shopping cart
  renderShoppingCart();
  