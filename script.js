const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const stripesMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartMenu = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toogleDesktopMenu);

function toogleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

stripesMenu.addEventListener('click', toogleMobileMenu)

function toogleMobileMenu() {
    const shoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    if (!shoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

shoppingCartMenu.addEventListener('click', toogleshoppingCartContainer)

function toogleshoppingCartContainer() {
    const mobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (!mobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'bici',
    price: 200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'pantalla',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'tele',
    price: 400,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
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

function renderProducts (arr) {
    for (product of arr) {
        const divProductCard = document.createElement('div');
        divProductCard.classList.add('product-card');
        
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
        
        const divProductInfo = document.createElement('div');
        divProductInfo.classList.add('product-info');
        
        const divPriceName = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = product.price;
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        const figureLabel = document.createElement('figure');
        
        const iconCart = document.createElement('img');
        iconCart.setAttribute('src', './icons/bt_add_to_cart.svg' );
        
        cardsContainer.appendChild(divProductCard);
        
        divProductCard.append(productImage,divProductInfo,);
        
        divProductInfo.append(divPriceName,figureLabel);
        
        divPriceName.append(productPrice,productName);
        
        figureLabel.appendChild(iconCart);
        }
}

renderProducts(productList);