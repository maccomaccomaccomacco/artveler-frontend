"use client"
import React, { useState, useCallback } from 'react';
import ExploreSearch from "@/components/exploreSearch";
import Filters from '@/components/filters';
import Results from '@/components/results';

export default function Page() {
    const [results, setResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [artistsResults, setArtistsResults] = useState([]);
    const [locationResults, setLocationResults] = useState([]);
    const [selectedArtists, setSelectedArtists] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [places, setPlaces] = useState([]);
    const [hasSelectedResult, setHasSelectedResult] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const handleSelectionChange = useCallback((selectedItems, type) => {
        const filterKey = type === 'artist' ? 'artist' : 'location';
        console.log(filterKey);
        console.log(selectedItems);
        
        setFilteredResults(
            results.filter(result => selectedItems.some(item => item.value === result[filterKey]) )
        );
    }, [results]);

    const handleResults = useCallback((firstResearchResults) => {
        const uniqueItems = (items, key) => 
            items.map(item => ({ value: item[key], label: item[key] }))
                .filter((item, index, self) => 
                    index === self.findIndex(t => t.label === item.label)
                )
                .sort((a, b) => a.label.localeCompare(b.label));

        setResults(firstResearchResults);
        setFilteredResults(firstResearchResults);
        setArtistsResults(uniqueItems(firstResearchResults, 'artist'));
        setLocationResults(uniqueItems(firstResearchResults, 'location'));
        setHasSelectedResult(firstResearchResults.length > 0);
    }, []);

    const handleSelectedPlace = useCallback((places) => {
        setPlaces(places);
    }, []);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Array.isArray(filteredResults) ? Math.ceil(filteredResults.length / itemsPerPage) : 0;
    const paginatedResults = Array.isArray(filteredResults) ? filteredResults.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];

    return (
        <React.Fragment>
            <div className="mx-auto mt-16">
                {!hasSelectedResult && (
                    <>
                        <h1 className="text-4xl font-bold text-center text-gray-800 pt-16 mb-4">Explore Artworks Near You</h1>
                        <ExploreSearch onResults={handleResults} onSelectPlace={handleSelectedPlace} />
                    </>
                )}
            </div>
            {hasSelectedResult && (
            <div className='mt-10 mb-20 w-full'>
                <div className='mb-4 pb-4 border-b border-gray-300'>
                    <h1 className="text-2xl font-bold text-gray-800">Results by location</h1>
                    <span>{results.length} artworks found</span>
                </div>
                <div className='flex mt-8'>
                    <Filters
                        artistsResults={artistsResults}
                        locationResults={locationResults}
                        // placesResults={places}
                        handleSelectionChange={handleSelectionChange}
                    />
                    <Results
                        paginatedResults={paginatedResults}
                        totalPages={totalPages}
                        currentPage={currentPage}
                        handlePageChange={handlePageChange}
                    />
                </div>
            </div>
        )}
        </React.Fragment>
    );
}