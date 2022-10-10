const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const stripesMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartMenu = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toogleDesktopMenu);

function toogleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

stripesMenu.addEventListener('click', toogleMobileMenu)

function toogleMobileMenu() {
    const asideClosed = aside.classList.contains('inactive');
    if (!asideClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

shoppingCartMenu.addEventListener('click', toogleAside)

function toogleAside() {
    const mobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (!mobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'bici',
    price: 200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    nombre: 'pantalla',
    precio: 300,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    nombre: 'tele',
    precio: 400,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

/*<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>*/

for (product of productList) {
const divProductCard = document.createElement('div');
divProductCard.classList.add('product-card');

const productImage = document.createElement('img');
productImage.setAttribute('src', product.image);

const divProductInfo = document.createElement('div');
divProductInfo.classList.add('product-info');

const divPriceName = document.createElement('div');

const productPrice = document.createElement('p');
productPrice.innerText = '$120,00';

const productName = document.createElement('p');
productName.innertext = 'Bike';

const figureLabel = document.createElement('figure');

const iconCart = document.createElement('img');
iconCart.setAttribute('src', './icons/bt_add_to_cart.svg' );

cardsContainer.appendChild(divProductCard);

divProductCard.append(divProductInfo,productImage);

divProductInfo.append(figureLabel,divPriceName);

divPriceName.append(productPrice,productName);

figureLabel.appendChild(iconCart);
}