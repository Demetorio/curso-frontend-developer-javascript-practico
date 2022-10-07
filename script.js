const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const stripesMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toogleDesktopMenu);

function toogleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

stripesMenu.addEventListener('click', toogleMobileMenu)

function toogleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}