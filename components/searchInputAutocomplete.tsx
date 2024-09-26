"use client"

import React, { useState, useEffect } from 'react';
import { Search } from "lucide-react";
import { Autocomplete, TextField, CircularProgress } from '@mui/material';
import { useJsApiLoader } from '@react-google-maps/api';
import locationsData from '@/data/locations.json'; // Assuming locations.json is in the same directory
import artworksData from '@/data/output.json'; // Assuming output.json is in the same directory

const libraries = ['places'];

export default function SearchInputAutocomplete({ onResults, onSelectPlace }) {
    const [options, setOptions] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [nearbyLocations, setNearbyLocations] = useState([]);
    const [filteredArtworks, setFilteredArtworks] = useState([]);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyBmU6mpjIB1C1TxXf5TrvLX2XpJZiBVdQs', // Replace with your API key
        libraries,
    });

    useEffect(() => {
        if (inputValue && isLoaded) {
            findPlaces(inputValue);
        }
    }, [inputValue, isLoaded]);

    async function findPlaces(query) {
        setIsLoading(true);
        const { Place } = await google.maps.importLibrary("places");
        const request = {
            textQuery: query,
            fields: ["displayName", "location", "businessStatus"],
            language: "en-US",
            maxResultCount: 8,
            // includedType: 'locality',
            // useStrictTypeFiltering: true
        };
        //@ts-ignore
        const { places } = await Place.searchByText(request);

        if (places.length) {
            console.log("Results:", places);
            const newOptions = places.map(place => ({
                title: place.displayName,
                location: place.location,
            }));
            setOptions(newOptions);
        } else {
            console.log("No results");
        }
        setIsLoading(false);
    }

    const handleOptionSelect = (event, value) => {
        if (value) {
            const lat = value.location.lat();
            const lng = value.location.lng();
            const nearby = getNearbyLocations(lat, lng);
            setNearbyLocations(nearby);
            const artworks = getArtworksInLocations(nearby);
            setFilteredArtworks(artworks);
            console.log('Selected place:', value);
            console.log('Nearby locations:', nearby);
            console.log('Filtered artworks:', artworks);
            onResults(artworks);
            onSelectPlace(value);
        }
    };

    function getNearbyLocations(lat, lng) {
        const radius = 10; // 10 km
        return locationsData.locations.filter(location => {
            if (location.latitude && location.longitude) {
                const distance = calculateDistance(lat, lng, location.latitude, location.longitude);
                return distance <= radius;
            }
            return false;
        });
    }

    function calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Radius of the Earth in km
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in km
    }

    function deg2rad(deg) {
        return deg * (Math.PI / 180);
    }

    function getArtworksInLocations(locations) {
        const locationNames = locations.map(location => location.name);
        return artworksData.filter(artwork => locationNames.includes(artwork.location));
    }

    return (
        <div className="relative mt-12">
           <Autocomplete
                sx={{
                    height: '2.5rem', // h-10,
                    '& .MuiInputBase-root': {
                        height: '2.5rem', // h-10
                        fontSize: '0.875rem', // text-sm
                        lineHeight: '1.25rem',
                        borderRadius: '0.5rem', // rounded-lg
                        color: 'rgb(55,65,81)', // text-gray-700
                        '&::placeholder': {
                          color: 'rgb(228, 228, 8)', // placeholder:text-muted-foreground
                        },
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgb(228, 228, 228)', // border-input
                    }
                }}
                freeSolo
                options={options}
                getOptionLabel={(option) => typeof option === 'string' ? option : option.title}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                onChange={handleOptionSelect}
                renderOption={(props, option) => (
                    <li className='text-sm' {...props}  style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        <div>
                            {option.title}
                        </div>
                    </li>
                )}
                renderInput={(params) => (
                    <TextField
                    {...params}
                    placeholder="Enter an address to find nearby artworks"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <React.Fragment>
                          {isLoading ? <CircularProgress size={24} /> : null}
                          {params.InputProps.endAdornment}
                          <Search className="h-6 w-6 text-gray-400 mr-3 cursor-pointer" />
                        </React.Fragment>
                      ),
                    }}
                  />
                )}
            />
            {/* {nearbyLocations.length > 0 && (
                <div>
                    <h3>Nearby Locations:</h3>
                    <ul>
                        {nearbyLocations.map((location, index) => (
                            <li key={index}>{location.name}</li>
                        ))}
                    </ul>
                </div>
            )} */}
        </div>
    );
}