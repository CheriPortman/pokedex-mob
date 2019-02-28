export default function pageArray(array, pagingOptions) {
    const currentPage = pagingOptions.currentPage;
    const perPage = pagingOptions.perPage;

    const start = (currentPage - 1) * perPage;
    const end = start + perPage;

    return array.slice(start, end);
}