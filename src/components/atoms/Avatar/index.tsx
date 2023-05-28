export function Avatar() {
  return (
    <div className="relative w-8 h-8 overflow-hidden bg-sky-600 rounded-full dark:bg-gray-600">
      <svg
        className="absolute w-10 h-10 text-white dark:text-white -left-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
