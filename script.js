//
// Menu mobile toggle active
//

const body = document.querySelector('body');
const header = document.querySelector('.header_b');
const hamburger = document.querySelector('.mob_menu');

// Classes for close menu
const classNames = ['menu_link', 'mob_close'];

hamburger.addEventListener('click', () => {
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

window.addEventListener('resize', () => {
  if (header.classList.contains('active')) {
    header.classList.remove('active');
    body.classList.remove('noscroll');
  }
});

//
// Array of musicians objects
//

const musicians = [{
  name: 'Thierry Fischer',
  role: 'Principal conductor of the São Paulo State Symphony Orchestra',
  description: 'The Swiss conductor is the Principal Guest Conductor of the Seoul Philharmonic (South Korea)',
  photo: 'images/thierry_fischer.png',
}, {
  name: 'Marin Alsop',
  role: 'Music Director of the São Paulo State Symphony Orchestra',
  description: 'Laureate of the Baltimore Symphony Orchestra, as well as chief conductor of the Vienna Radio '
  + 'Symphony Orchestra',
  photo: 'images/marin_alsop.png',
}, {
  name: 'Jin Joo Doh',
  role: 'São Paulo Symphony Orchestra cello player',
  description: "Born in Seoul, South Korea, Jin Joo Doh studied at the Korean National University's College of "
  + 'Music in Seoul with Young-Sook Yun',
  photo: 'images/jin_joo_doh.png',
}, {
  name: 'Ricardo Bologna',
  role: 'São Paulo Symphony Orchestra timpanist',
  description: 'He founded the Percorso Ensemble, created from the desire of its members to encourage the '
  + 'creation of new works and promote 20th century repertoires',
  photo: 'images/ricardo_bologna.png',
}, {
  name: 'Wagner Polistchuk',
  role: 'São Paulo Symphony Orchestra trombonist',
  description: 'Principal Conductor of the University of São Paulo Symphony Orchestra',
  photo: 'images/wagner_polistchuk.png',
}, {
  name: 'Soraya Landim',
  role: 'São Paulo Symphony Orchestra violinist',
  description: 'A violinist since the age of seven, she developed technique and performance in contact with '
  + 'great masters of this instrument such as Claudio Cruz, Dmitry Sitkovetsky and Chaim Taub in Tel Aviv',
  photo: 'images/soraya_landim.png',
}];

//
// Project sections created when page loads, below the section with activities id
//

const activities = document.getElementById('activities');

const section = document.createElement('section');
section.className = 'musicians';
section.id = 'musicians';

const h2 = document.createElement('h2');
h2.innerText = 'Musicians';
section.appendChild(h2);

const sep = document.createElement('div');
sep.className = 'sep';
section.appendChild(sep);

const container = document.createElement('div');
container.className = 'container';

for (let i = 0; i < musicians.length; i += 1) {
  const article = document.createElement('article');

  // if (i > 1) {
  //   article.className = 'desktop';
  // }

  const img = document.createElement('img');
  img.src = musicians[i].photo;
  img.alt = musicians[i].name;
  article.appendChild(img);

  const h3 = document.createElement('h3');
  h3.innerText = musicians[i].name;
  article.appendChild(h3);

  const role = document.createElement('p');
  role.className = 'role';
  role.innerText = musicians[i].role;
  article.appendChild(role);

  const div = document.createElement('div');
  article.appendChild(div);

  const description = document.createElement('p');
  description.className = 'description';
  description.innerText = musicians[i].description;
  article.appendChild(description);

  container.appendChild(article);
}

section.appendChild(container);

// const button = document.createElement('button');
// button.type = 'button';

// const more = document.createElement('span');
// more.innerText = 'MORE';
// button.appendChild(more);

// const expand = document.createElement('span');
// expand.className = 'material-icons-outlined md-24 red242';
// expand.innerText = 'expand_more';
// button.appendChild(expand);

// section.appendChild(button);
activities.insertAdjacentElement('afterend', section);
