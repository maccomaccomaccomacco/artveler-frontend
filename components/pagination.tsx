import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const pages = [...Array(totalPages).keys()].map(num => num + 1);
    return (
        <div className="flex justify-center mt-4">
            {pages.map(page => (
                <button
                    key={page}
                    className={`mx-1 px-3 py-1 border ${page === currentPage ? 'bg-gray-300' : 'bg-white'}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;