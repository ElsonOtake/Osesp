//
// Menu mobile toggle active
//

const body = document.querySelector("body");
const header = document.querySelector(".header_b");
const hamburger = document.querySelector(".mob_menu");

// Classes for close menu

const classNames = ["menu_link", "mob_close"];

hamburger.addEventListener("click", (event) => {
  header.classList.add("active");
  body.classList.add("noscroll");
});

header.addEventListener("click", (event) => {
  const clickedElementClassName = event.target.classList[0];
  const shouldToggle = classNames.some((className) => className === clickedElementClassName);

  if (shouldToggle && header.classList.contains("active")) {
    header.classList.remove("active");
    body.classList.remove("noscroll");
  }
});

//
// Array of musicians objects
//

const musicians = [{
  name: "Thierry Fischer",
  role: "Principal conductor of the São Paulo State Symphony Orchestra",
  description: "The Swiss conductor is the Principal Guest Conductor of the Seoul Philharmonic (South Korea)",
  photo: "images/thierry_fischer.png"
}, {
  name: "Marin Alsop",
  role: "Music Director of the São Paulo State Symphony Orchestra",
  description: "Laureate of the Baltimore Symphony Orchestra, as well as chief conductor of the Vienna Radio "
  + "Symphony Orchestra",
  photo: "images/marin_alsop.png"
}, {
  name: "Jin Joo Doh",
  role: "São Paulo Symphony Orchestra cello player",
  description: "Born in Seoul, South Korea, Jin Joo Doh studied at the Korean National University's College of "
  + "Music in Seoul with Young-Sook Yun",
  photo: "images/jin_joo_doh.png"
}, {
  name: "Ricardo Bologna",
  role: "São Paulo Symphony Orchestra timpanist",
  description: "He founded the Percorso Ensemble, created from the desire of its members to encourage the "
  + "creation of new works and promote 20th century repertoires",
  photo: "images/ricardo_bologna.png"
}, {
  name: "Wagner Polistchuk",
  role: "São Paulo Symphony Orchestra trombonist",
  description: "Principal Conductor of the University of São Paulo Symphony Orchestra",
  photo: "images/wagner_polistchuk.png"
}, {
  name: "Soraya Landim",
  role: "São Paulo Symphony Orchestra violinist",
  description: "A violinist since the age of seven, she developed technique and performance in contact with "
  + "great masters of this instrument such as Claudio Cruz, Dmitry Sitkovetsky and Chaim Taub in Tel Aviv",
  photo: "images/soraya_landim.png"
}];
