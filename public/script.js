// Deze code is puur voor het zij-menu die over de gehele website komt

const menu = document.querySelector('.crossnav')
const button = document.querySelector('.menu-button')
const close = document.querySelector('path')
const filterdiv = document.querySelector('main div:first-child')

			button.addEventListener('click', function(){
  			menu.classList.add('show');
			filterdiv.classList.toggle('filter');
});

			close.addEventListener('click', function(){
  			menu.classList.remove('show')
			filterdiv.classList.remove('filter');
});
// einde menu script