let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let cartItem = document.querySelector('.cart-items-container');
let menuBtn = document.querySelector('#menu-btn');

const cartContainer = document.querySelector('.header .cart-items-container');
cartContainer.classList.toggle('visible');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');
});

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  cartItem.classList.remove('active');
};

document.querySelector('#cart-btn').onclick = () => {
  cartItem.classList.toggle('active');
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
};

window.onscroll = () => {
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');
};

document.addEventListener('DOMContentLoaded', () => {
  const cartContainer = document.querySelector('#cart-items-container');
  const totalPriceElement = document.querySelector('#total-price');
  let totalPrice = 0;

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      const name = button.getAttribute('data-name');
      const price = parseFloat(button.getAttribute('data-price'));
      const image = button.getAttribute('data-image');

      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <span class="fas fa-times remove-from-cart"></span>
        <img src="${image}" alt="">
        <div class="content">
          <h3>${name}</h3>
          <div class="price">€${price.toFixed(2)}</div>
        </div>
      `;

      cartContainer.insertBefore(cartItem, document.querySelector('#cart-total'));
      totalPrice += price;
      totalPriceElement.textContent = totalPrice.toFixed(2);

      cartItem.querySelector('.remove-from-cart').addEventListener('click', () => {
        cartItem.remove();
        totalPrice -= price;
        totalPriceElement.textContent = totalPrice.toFixed(2);
      });
    });
  });
});