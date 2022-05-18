//
// Menu mobile toggle active
//

const body = document.querySelector('body');
const header = document.querySelector('.header_b');

// Classes for close menu

const classNames = ['menu_link', 'mob_menu', 'mob_close'];

header.addEventListener('click', (event) => {
  console.log(event.target);
  const clickedElementClassName = event.target.classList[0];
  const shouldToggle = classNames.some((className) => className === clickedElementClassName);

  if (shouldToggle) {
    header.classList.toggle('active');

    // Vertical scroll disabled

    if (header.classList.contains('active')) {
      body.classList.add('noscroll');
    } else {
      body.classList.remove('noscroll');
    }
  }
});