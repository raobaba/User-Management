import React from 'react';

const Pagination = ({ usersPerPage, totalUsers, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalUsers / usersPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="flex justify-center mt-4">
      <ul className="flex space-x-2">
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              onClick={() => onPageChange(number)}
              className={`px-4 py-2 border rounded-md text-sm font-medium focus:outline-none focus:ring-2 ${
                currentPage === number
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
