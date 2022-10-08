const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const stripesMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartMenu = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

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