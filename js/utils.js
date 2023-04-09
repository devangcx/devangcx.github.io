/**
 * Some utility functions used on the index.ts
 */
/**
 * Load all the cards from the cardsEl and scroll so that the top of the Work container is in view.
 * @param cardsEl An HTML element with multiple children elements representing cards.
 * @param workContainerEl  An HTML element representing the Work container.
 */
function loadCards(cardsEl, workContainerEl) {
    for (let i = 0; i < cardsEl.children.length; i++) {
        const cardEl = cardsEl.children[i];
        if (cardEl) {
            cardEl.style.display = "flex";
        }
    }
    workContainerEl.scrollIntoView();
}
/**
 * Hide all the card from the cardsEl if the card does not have the given className.
 * @param className The className to check if it exists on the card element.
 * @param cardsEl An HTML element with multiple children elements representing cards.
 * @param workEl An HTML element representing the Work container.
 */
function hideCards(className, cardsEl, workEl) {
    loadCards(cardsEl, workEl);
    for (let i = 0; i < cardsEl.children.length; i++) {
        const cardEl = cardsEl.children[i];
        if (cardEl.classList.contains(className) === false) {
            if (cardEl) {
                cardEl.style.display = "none";
            }
        }
    }
}
export { loadCards, hideCards };
