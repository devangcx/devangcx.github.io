/**
 * The Card object.
 */


interface Project {
    title: string,
    description: string,
    link: string,
    thumbnail: string,
    alt: string,
    tag: string
}

/**
 * Create a Card object.
 */
class Card {
    /**
     * Create an instance of the Card object.
     * @param data A Project object.
     */
    constructor(data: Project) {
        Object.assign(this, data);
    }
    /**
     * The title of the card.
     */
    title: string
    /**
     * Description of the card as a text string.
     */
    description: string
    /**
     * Link to the another HTML file or and external link
     */
    link: string
    /**
     * Link to the image used as a thumbnail
     */
    thumbnail: string
    /**
     * The value of the alt attribute of the thumbnail image.
     */
    alt: string
    /**
     * A tag
     */
    tag: string

    /**
     * 
     * @returns Get an HTML representation of the Card object as a string.
     */
    getHtml(): string {
        const { title, description, link, thumbnail, alt, tag } = this;
        return `
            <div class="card ${tag}">
                <div class="card-description">
                    <h4>${title}</h4>
                    <p>${description}</p>
                </div>
                <a href=${link} target="_blank" class="card-links">
                    <img src=${thumbnail} class="card-img" alt=${alt}>
                </a>
            </div>
        `;
    }
}


export default Card;


