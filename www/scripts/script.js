console.log('script work!');
let burger = document.querySelector('.js-burger');
burger.addEventListener('click', function(event) {
    event.preventDefault();
    let menu = document.querySelector('.js-menu');
    menu.classList.add('open');
})