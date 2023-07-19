interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
const mClass =
  'flex w-8 h-8 mx-0.5 p-0 justify-center items-center rounded-md leading-tight text-xl border border-teal-500 ';

const disableClass =
  'bg-gray-300 text-gray-500 cursor-not-allowed border-gray-400';
const activeClass = 'bg-teal-500 text-white cursor-not-allowed';
const arrowButtonClass = 'bg-teal-500 text-white';

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
        className={`${mClass} ${isFirstPage ? disableClass : arrowButtonClass}`}
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
              currentPage === page ? activeClass : 'bg-white text-teal-500'
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
        className={`${mClass} ${isLastPage ? disableClass : arrowButtonClass}`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={isLastPage}
      >
        {`>>`}
      </button>
    </div>
  );
}

export default Pagination;
