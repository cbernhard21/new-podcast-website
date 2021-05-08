export function slideNav() {
  const burgerMenu = document.querySelector('.burger-menu');
  const navList = document.querySelector('.main-nav');

  burgerMenu.addEventListener('click', () => {
    console.log('i was clicked');
    //toggle nav on screen
    navList.classList.toggle('slide');
    //animate burger lines
    burgerMenu.classList.toggle('burger-move');
  });

}