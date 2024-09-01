'use client'

import React, { useState, useEffect } from 'react'
import { Search } from "lucide-react"
import { Autocomplete, TextField, CircularProgress } from '@mui/material'
import { useJsApiLoader } from '@react-google-maps/api'

const libraries = ['places'];

export default function SearchInputAutocomplete() {
    const [options, setOptions] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

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
        console.log("Arrivo")
        const { Place } = await google.maps.importLibrary("places");
        const request = {
            textQuery: query,
            fields: ["displayName", "location", "businessStatus"],
            language: "en-US",
            maxResultCount: 8,
            useStrictTypeFiltering: false,
        };
        //@ts-ignore
        const { places } = await Place.searchByText(request);

        console.log(places)
        if (places.length) {
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
            console.log('Selected place:', value);
            // Add your custom logic here for when an option is selected
        }
    };

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
                renderOption={(props, option) => {
                    console.log("Option", option)
                    return(
                    <li className='text-sm' {...props}  style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        <div>
                            {option.title}
                        </div>
                    </li>
                )}}
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
        </div>
    )
}