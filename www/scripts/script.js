console.log('script work!');


let burger = document.querySelector('.js-burger');
let menu = document.querySelector('.js-menu');

burger.addEventListener('click', function(event) {
    event.preventDefault();
   
    if( menu.style.display == 'block'){
         menu.style.display = '';
         return;
    }
    menu.style.display = 'block';
})