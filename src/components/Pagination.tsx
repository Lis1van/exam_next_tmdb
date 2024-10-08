import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPage: number;
    onPageChange: (direction: string) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPage, onPageChange }) => {
    return (
        <div className='flex justify-center gap-16 py-6 pt-16'>
            <button
                onClick={() => onPageChange('prev')}
                className={`rounded-md text-white bg-gray-600 dark:bg-orange-400 p-2 px-8 hover:bg-gray-700 
                dark:hover:bg-orange-500 ${currentPage === 1 && 'hidden'}`}
            >
                Prev
            </button>
            <button
                onClick={() => onPageChange('next')}
                className={`rounded-md text-white bg-gray-600 dark:bg-orange-400 p-2 px-8 hover:bg-gray-700 
                dark:hover:bg-orange-500 ${currentPage === totalPage && 'hidden'}`}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
