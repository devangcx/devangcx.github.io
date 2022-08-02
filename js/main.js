
const workEl = document.getElementById("work");

const allBtn = document.getElementById("all-btn");
const techBtn = document.getElementById("tech-btn");
const supportBtn = document.getElementById("support-btn");
const analysisBtn = document.getElementById("analysis-btn");
const buildingBtn = document.getElementById("buildings-btn");
const designBtn = document.getElementById("design-btn");



allBtn.addEventListener("click", function () {
    for (let i = 0; i < workEl.children.length; i++) {
        cardEl = workEl.children[i];
        cardEl.style.display = "flex";

    }
    document.getElementById("work").scrollIntoView();
});

techBtn.addEventListener("click", function () {

    for (let i = 0; i < workEl.children.length; i++){
        cardEl = workEl.children[i];
        cardEl.style.display = "flex";
    }

    for (let i = 0; i < workEl.children.length; i++) {
        cardEl = workEl.children[i];
        if (cardEl.classList.contains("tech") === false && cardEl.classList.contains("work-nav") === false)  {
            cardEl.style.display = "none";
        }
    }
    document.getElementById("work").scrollIntoView();
});

supportBtn.addEventListener("click", function () {

    for (let i = 0; i < workEl.children.length; i++){
        cardEl = workEl.children[i];
        cardEl.style.display = "flex";
    }

    for (let i = 0; i < workEl.children.length; i++) {
        cardEl = workEl.children[i];
        if (cardEl.classList.contains("support") === false && cardEl.classList.contains("work-nav") === false)  {
            cardEl.style.display = "none";
        }
    }
    document.getElementById("work").scrollIntoView();
});

analysisBtn.addEventListener("click", function () {

    for (let i = 0; i < workEl.children.length; i++){
        cardEl = workEl.children[i];
        cardEl.style.display = "flex";
    }

    for (let i = 0; i < workEl.children.length; i++) {
        cardEl = workEl.children[i];
        if (cardEl.classList.contains("analysis") === false && cardEl.classList.contains("work-nav") === false)  {
            cardEl.style.display = "none";
        }
    }
    document.getElementById("work").scrollIntoView();
});

buildingBtn.addEventListener("click", function () {

    for (let i = 0; i < workEl.children.length; i++){
        cardEl = workEl.children[i];
        cardEl.style.display = "flex";
    }

    for (let i = 0; i < workEl.children.length; i++) {
        cardEl = workEl.children[i];
        if (cardEl.classList.contains("building") === false && cardEl.classList.contains("work-nav") === false)  {
            cardEl.style.display = "none";
        }
    }
    document.getElementById("work").scrollIntoView();
});

designBtn.addEventListener("click", function () {

    for (let i = 0; i < workEl.children.length; i++){
        cardEl = workEl.children[i];
        cardEl.style.display = "flex";
    }

    for (let i = 0; i < workEl.children.length; i++) {
        cardEl = workEl.children[i];
        if (cardEl.classList.contains("design") === false && cardEl.classList.contains("work-nav") === false)  {
            cardEl.style.display = "none";
        }
    }
    document.getElementById("work").scrollIntoView();
});


