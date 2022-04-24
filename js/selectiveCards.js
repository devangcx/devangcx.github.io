import Cards from "./cards.js";

const cardNames = [
  "sunpathApp",
  "hokWare",
  "msaCentral",
  "searchComponent",
  "ladybugDeveloper",
  "weatherApp",
];

function loadCards(cardNames) {
  const masonry = document.getElementById("masonry");
  const children = Array.from(masonry.children);
  const childrenIds = children.map((child) => child.id);

  for (let i = 0; i < cardNames.length; i++) {
    const card = document.getElementById(cardNames[i]);
    if (childrenIds.includes(cardNames[i])) {
      masonry.removeChild(card);
    }
  }
}

export default loadCards;
