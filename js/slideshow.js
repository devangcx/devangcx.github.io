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

// Add dots based on the number of slides
const dots = document.getElementById("dots");
const addDots = function (numOfSlides) {
  for (i = 0; i < numOfSlides; i++) {
    let dotElement = document.createElement("span");
    dotElement.classList.add("dot");
    dots.appendChild(dotElement);
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

export default showSlides;
