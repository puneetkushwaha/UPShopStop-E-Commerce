const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('active'); // Example to show/hide the menu
});
