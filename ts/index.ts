import projects from './projects.js';
import Card from './Card.js';
import { loadCards, hideCards } from './utils.js';

// Elements
const workEl = document.getElementById("work");
const cardsEl = document.getElementById("cards");

// Buttons
const allBtn = document.getElementById("all-btn");
const techBtn = document.getElementById("tech-btn");
const supportBtn = document.getElementById("support-btn");
const analysisBtn = document.getElementById("analysis-btn");
const buildingBtn = document.getElementById("buildings-btn");
const designBtn = document.getElementById("design-btn");

// Load cards
cardsEl.innerHTML = projects.map(project => new Card(project).getHtml()).join(' ');


// Button actions
allBtn.addEventListener("click", () => loadCards(cardsEl, workEl));
techBtn.addEventListener("click", () => hideCards("tech", cardsEl, workEl));
supportBtn.addEventListener("click", () => hideCards("support", cardsEl, workEl));
analysisBtn.addEventListener("click", () => hideCards("analysis", cardsEl, workEl));
buildingBtn.addEventListener("click", () => hideCards("building", cardsEl, workEl));
designBtn.addEventListener("click", () => hideCards("design", cardsEl, workEl));


