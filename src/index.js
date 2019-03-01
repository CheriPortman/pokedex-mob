import loadCards from './card-component.js';
import pokemans from '../data/pokedex.js';
import loadPaging from './paging-component.js';
import pageArray from './page-array.js';

loadPaging(pokemans.length, pagingOptions => {
    const pagedPokemans = pageArray(pokemans, pagingOptions);
    loadCards(pagedPokemans);
});