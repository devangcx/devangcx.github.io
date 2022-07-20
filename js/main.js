
    
const appBtn = document.getElementById("apps-btn")
const workEl = document.getElementById("work")
const workBtn = document.getElementById("work-btn")

appBtn.addEventListener("click", function () {
    for (let i = 0; i < workEl.children.length; i++) {
        cardEl = workEl.children[i];
        if (cardEl.classList.contains("app") === false) {
            cardEl.style.display = "none";
        }
    }
    document.getElementById("work").scrollIntoView();
});

workBtn.addEventListener("click", function () {
    for (let i = 0; i < workEl.children.length; i++) {
        cardEl = workEl.children[i];
        cardEl.style.display = "flex";

    }
    document.getElementById("work").scrollIntoView();
});
