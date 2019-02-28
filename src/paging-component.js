const previousButton = document.getElementById('previous-button');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');
const nextButton = document.getElementById('next-button');

const PER_PAGE = 30;

export default function loadPaging(totalPokemans) {
    const totalPageCount = Math.ceil(totalPokemans / PER_PAGE);
    totalPages.textContent = totalPageCount;

    nextButton.addEventListener()
} 