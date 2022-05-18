//
// Menu mobile toggle active
//

const body = document.querySelector('body');
const header = document.querySelector('.header_b');
const hamburger = document.querySelector('.mob_menu');

// Classes for close menu

const classNames = ['menu_link', 'mob_close'];

hamburger.addEventListener('click', (event) => {
  header.classList.add('active');
  body.classList.add('noscroll');
});

header.addEventListener('click', (event) => {
  const clickedElementClassName = event.target.classList[0];
  const shouldToggle = classNames.some((className) => className === clickedElementClassName);

  if (shouldToggle && header.classList.contains('active')) {
    header.classList.remove('active');
    body.classList.remove('noscroll');
  }
});