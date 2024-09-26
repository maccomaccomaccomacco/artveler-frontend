"use client"
import React, { useState, useCallback } from 'react';
import SearchInputAutoComplete from "@/components/searchInputAutocomplete";
import Selector from "@/components/selector";
import Image from 'next/image';

export default function Page() {
    const [results, setResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [artistsResults, setArtistsResults] = useState([]);
    const [locationResults, setLocationResults] = useState([]);
    const [selectedArtists, setSelectedArtists] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [place, setPlace] = useState({ title: '' });
    const [hasSelectedResult, setHasSelectedResult] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const handleSelectionChange = useCallback((selectedItems, type) => {
        const filterKey = type === 'artist' ? 'artist' : 'location';
        const setSelected = type === 'artist' ? setSelectedArtists : setSelectedLocations;

        setSelected(selectedItems);
        setFilteredResults(
            selectedItems.length === 0
                ? results
                : results.filter(result =>
                    selectedItems.some(item => item.value === result[filterKey])
                )
        );
    }, [results]);

    const handleResults = useCallback((newResults) => {
        const uniqueItems = (items, key) => 
            items.map(item => ({ value: item[key], label: item[key] }))
                .filter((item, index, self) => 
                    index === self.findIndex(t => t.label === item.label)
                )
                .sort((a, b) => a.label.localeCompare(b.label));

        setResults(newResults);
        setFilteredResults(newResults);
        setArtistsResults(uniqueItems(newResults, 'artist'));
        setLocationResults(uniqueItems(newResults, 'location'));
        setHasSelectedResult(newResults.length > 0);
    }, []);

    const handleSelectedPlace = useCallback((place) => {
        setPlace(place);
    }, []);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(filteredResults.length / itemsPerPage);
    const paginatedResults = filteredResults.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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

    return (
        <React.Fragment>
            <div className="mx-auto mt-16">
                {!hasSelectedResult && (
                    <>
                        <h1 className="text-4xl font-bold text-center text-gray-800 pt-16">Explore Artworks Near You</h1>
                        <SearchInputAutoComplete onResults={handleResults} onSelectPlace={handleSelectedPlace} />
                    </>
                )}
            </div>
            {hasSelectedResult && (
            <div className='mx-5 mt-10 mb-20'>
                <div className='mb-4'>
                    <h1 className="text-2xl font-bold text-gray-800">Results near {place.title}</h1>
                    <span>{results.length} artworks found</span>
                    <br />
                    <hr />
                </div>
                <div className='flex mt-12'>
                    <div className='w-1/6 mr-8 border-r border-gray-300 p-2 rounded-sm'>
                        <div className='mb-4'>
                            <span className="text-sm font-bold text-gray-800">Artists</span>
                            <Selector inputs={artistsResults} onSelectionChange={(items) => handleSelectionChange(items, 'artist')} />
                        </div>
                        <div className='mb-4'>
                            <span className="text-sm font-bold text-gray-800">Locations</span>
                            <Selector inputs={locationResults} onSelectionChange={(items) => handleSelectionChange(items, 'location')} />
                        </div>
                    </div>
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
                </div>
            </div>
        )}
        </React.Fragment>
    );
}