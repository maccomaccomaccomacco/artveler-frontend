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

    return (
        <React.Fragment>
            <div className="mx-auto mt-16">
                {!hasSelectedResult && (
                    <>
                        <h1 className="text-4xl font-bold text-center text-gray-800 pt-16">Explore Artworks Near You</h1>
                        <ExploreSearch onResults={handleResults} onSelectPlace={handleSelectedPlace} />
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
                    <Filters
                        artistsResults={artistsResults}
                        locationResults={locationResults}
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