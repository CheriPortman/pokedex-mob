const test = QUnit.test;

QUnit.module('Card Creation');

function createCard() {
    const html = /*html*/ `
        <li>
            <h2>bulbasaur</h2>
            <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png">
            <p>
                HP: 451
                A: 491
                D: 491
            </p>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

test('Make card template', assert => {
    // arrange
    const expected = /*html*/ `
        <li>
            <h2>bulbasaur</h2>
            <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png">
            <p>
                HP: 451
                A: 491
                D: 491
            </p>
        </li>
    `;
    // act
    const result = createCard();
    // assert
    assert.htmlEqual(result, expected);
});