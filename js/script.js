const menu_btn = document.querySelector('#menu-btn')
const menu = document.querySelector('#hamburger-menu')

menu_btn.addEventListener('click', () => {
    menu.classList.toggle('open')
})