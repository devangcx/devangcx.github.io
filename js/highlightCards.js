// Highlight these cards
const cardsToHighlight = [
  "workflow repository",
  "internal website",
  "view script",
];

function highlightCards(cards) {
  document.addEventListener("DOMContentLoaded", function (e) {
    const h4s = document.getElementsByTagName("h4");

    for (i = 0; i < h4s.length; i++) {
      if (cardsToHighlight.includes(h4s[i].innerText.toLowerCase())) {
        bold = h4s[i].children[0];
        bold.style.cssText =
          "text-decoration:none; border-bottom: 5px solid #ee233c;";
      }
    }
  });
}

export default highlightCards;
