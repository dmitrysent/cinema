const navigation = document.querySelector('.js-navigation');
const burgerBtn = document.querySelector('.js-burger-btn');
const closeBtn = document.querySelector('.js-navigation-close');

burgerBtn.addEventListener('click', () => {
   navigation.style.right = '0'; 
});

closeBtn.addEventListener('click', () => {
   navigation.style.right = ''; 
});
