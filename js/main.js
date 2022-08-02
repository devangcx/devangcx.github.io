
const workEl = document.getElementById("work");

const allBtn = document.getElementById("all-btn");
const techBtn = document.getElementById("tech-btn");
const supportBtn = document.getElementById("support-btn");
const analysisBtn = document.getElementById("analysis-btn");
const buildingBtn = document.getElementById("buildings-btn");
const designBtn = document.getElementById("design-btn");

const hideCards = function (className, parentEl) {

    for (let i = 0; i < parentEl.children.length; i++){
        cardEl = parentEl.children[i];
        cardEl.style.display = "flex";
    }

    for (let i = 0; i < parentEl.children.length; i++) {
        cardEl = parentEl.children[i];
        if (cardEl.classList.contains(className) === false && cardEl.classList.contains("work-nav") === false)  {
            cardEl.style.display = "none";
        }
    }
    parentEl.scrollIntoView();
};

allBtn.addEventListener("click", function () {
    for (let i = 0; i < workEl.children.length; i++) {
        cardEl = workEl.children[i];
        cardEl.style.display = "flex";

    }
    document.getElementById("work").scrollIntoView();
});

techBtn.addEventListener("click", function () {
    hideCards("tech", workEl);
});

supportBtn.addEventListener("click", function () {
    hideCards("support", workEl);
});

analysisBtn.addEventListener("click", function () {
    hideCards("analysis", workEl); 
});

buildingBtn.addEventListener("click", function () {
    hideCards("building", workEl); 
});

designBtn.addEventListener("click", function () {
    hideCards("design", workEl); 
});

