const previousButton = document.getElementById('previous-button');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');
const nextButton = document.getElementById('next-button');

const PER_PAGE = 30;


export default function loadPaging(totalPokemans) {
    const totalPageCount = Math.ceil(totalPokemans / PER_PAGE);
    totalPages.textContent = totalPageCount;
    
    let currentPageNumber = 1;
    updatePaging();

    nextButton.addEventListener('click', () => {
        currentPageNumber++;
        updatePaging();
    });

    previousButton.addEventListener('click', () => {
        currentPageNumber--;
        updatePaging();
    });

    function updatePaging() {
        currentPage.textContent = currentPageNumber;
        const pagingOptions = {
            page: currentPageNumber,
            perPage: PER_PAGE
        };
        console.log(pagingOptions);
        nextButton.disabled = currentPageNumber === totalPageCount;
        previousButton.disabled = currentPageNumber === 1;
    }
} 