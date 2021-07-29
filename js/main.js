// Resume prompt
function resumePropmt() {
  alert(
    "Thank you for your interest. Please email devang@outlook.in\
 for a latest copy of resume."
  );
}

// Get the number of slides
const slideContainer = document.querySelector(".slideshow-container").children;
const numOfSlides = function (slideContainer) {
  let numOfSlides = 0;
  for (i = 0; i < slideContainer.length; i++) {
    if (slideContainer[i].className == "mySlides fade") {
      numOfSlides++;
    }
  }
  return numOfSlides;
};

// Add dots
const dots = document.getElementById("dots");
const dotElement = `<span class="dot"></span>`;

const addDots = function (numOfSlides) {
  for (i = 0; i < numOfSlides; i++) {
    dots.innerHTML += dotElement;
  }
};
addDots(numOfSlides(slideContainer));

// Simulate a slide show
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// Highlight card text if they match certain names
// document.addEventListener("DOMContentLoaded", function (e) {
//   const h4s = document.getElementsByClassName("cards");
//   console.log("Length", h4s.length);
//   cardsToHighlight = ["Workflow Repository", "Internal Website", "View Script"];
//   for (i = 0; i < h4s.length; i++) {
//     console.log("Outer text", h4s[i].lastElementChild.outerText);
//     if (cardsToHighlight.includes(h4s[i].lastElementChild.outerText)) {
//       h4s[i].style.cssText =
//         "text-decoration:none; border-bottom: 5px solid #ee233c;";
//     }
//   }
// });
// console.log("I am here");
