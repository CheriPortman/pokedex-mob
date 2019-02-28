export function createCard(pokemon) {
    const html = /*html*/ `
        <li class="${pokemon.type_1}">
            <h2>${pokemon.pokemon}</h2>
            <img src="${pokemon.url_image}">
            <p>
                HP: ${pokemon.hp}
                A: ${pokemon.attack}
                D: ${pokemon.defense}
            </p>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

const pokelist = document.getElementById('pokelist');
export default function loadCards(pokemans) {
    pokemans.forEach(pokemon => {
        const dom = createCard(pokemon);
        pokelist.appendChild(dom);
    });
}