
function loadCards(parentEl, scrollEl) {
    for (let i = 0; i < parentEl.children.length; i++){
        const cardEl = parentEl.children[i];
        cardEl.style.display = "flex";
    }

    scrollEl.scrollIntoView();

}

function hideCards(className, parentEl, scrollEl) {

    loadCards(parentEl, scrollEl);

    for (let i = 0; i < parentEl.children.length; i++) {
        const cardEl = parentEl.children[i];
        if (cardEl.classList.contains(className) === false && cardEl.classList.contains("work-nav") === false)  {
            cardEl.style.display = "none";
        }
    }
}

export { loadCards, hideCards };