const previousButton = document.getElementById('previous-button');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');
const nextButton = document.getElementById('next-button');

const PER_PAGE = 30;

let currentPageNumber = 1;

export default function loadPaging(totalPokemans) {
    const totalPageCount = Math.ceil(totalPokemans / PER_PAGE);
    totalPages.textContent = totalPageCount;

    previousButton.disabled = currentPageNumber === 1;

    nextButton.addEventListener('click', () => {
        currentPageNumber++;
        currentPage.textContent = currentPageNumber;

        const pagingOptions = {
            page: currentPageNumber,
            perPage: PER_PAGE
        };

        console.log(pagingOptions);

        nextButton.disabled = currentPageNumber === totalPageCount;
        previousButton.disabled = currentPageNumber === 1;

    
    });

    previousButton.addEventListener('click', () => {
        currentPageNumber--;
        currentPage.textContent = currentPageNumber;

        const pagingOptions = {
            page: currentPageNumber,
            perPage: PER_PAGE
        };

        console.log(pagingOptions);

        nextButton.disabled = currentPageNumber === totalPageCount;
        previousButton.disabled = currentPageNumber === 1;

    
    });
} 