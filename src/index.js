import loadCards from './card-component.js';
import pokemans from '../data/pokedex.js';
import loadPaging from './paging-component.js';

loadCards(pokemans);
loadPaging(pokemans.length);