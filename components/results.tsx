import React from 'react';
import Image from 'next/image';
import Pagination from './pagination';

const Results = ({ paginatedResults, totalPages, currentPage, handlePageChange }) => (
    <div className='w-5/6'>
        <div className='grid gap-10 md:grid-cols-2 lg:gap-6 xl:grid-cols-4 min-h-screen'>
            {paginatedResults.map((result) => (
                <div className="group cursor-pointer" key={result.id}>
                    <div className="overflow-hidden rounded-md bg-gray-100 transition-all dark:bg-gray-800">
                        <a className="relative block aspect-square">
                            <Image
                                className="object-cover transition-all"
                                sizes="(max-width: 768px) 30vw, 33vw"
                                src={result.artworkImg}
                                fill
                            />
                        </a>
                    </div>
                    <div className="my-1">
                        <span className="text-sm font-semibold">
                            <a>
                                <span>{result.title}</span>
                            </a>
                        </span>
                        <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                            <span className="truncate text-sm">{result.artist}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-500 mt-1">
                            <span className="truncate text-xs">{result.location}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
);

export default Results;