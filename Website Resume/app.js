const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});
document.addEventListener('mousemove', function(e) {
    const rocket = document.getElementById('rocket');
    rocket.style.left = e.pageX + 'px';
    rocket.style.top = e.pageY + 'px';
});