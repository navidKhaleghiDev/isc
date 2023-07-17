interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
const mClass =
  'flex w-8 h-8 mx-0.5 p-0 justify-center items-center rounded-md leading-tight text-xl text-teal-600 bg-white border border-teal-600 hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    onPageChange(page);
  };

  if (totalPages < 8) {
    return null;
  }
  return (
    <div className="flex justify-center items-center mt-4">
      <button
        type="button"
        className={`${mClass} ${
          isFirstPage
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-teal-500 text-white'
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={isFirstPage}
      >
        {`<<`}
      </button>

      <div className="flex">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            type="button"
            key={page}
            className={`${mClass} ${
              currentPage === page
                ? 'bg-teal-500 text-white cursor-not-allowed'
                : 'bg-gray-300 cursor-pointer'
            }`}
            onClick={() => handlePageChange(page)}
            disabled={currentPage === page}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        type="button"
        className={`${mClass} ${
          isLastPage
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-teal-500 text-white'
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={isLastPage}
      >
        {`>>`}
      </button>
    </div>
  );
}

export default Pagination;
