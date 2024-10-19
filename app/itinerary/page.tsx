"use client"
import React, { useState, useEffect, useRef } from 'react';
import { findBySubstr } from '../../lib/searcher';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import DraggableList from "react-draggable-list";
import ItineraryStop from '../../components/itinerary_stop';
import GoogleMapComponent from './GoogleMapComponent';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function NewItineraryPage() {  
  const [selectedElements, setSelectedElements] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchInputOpen, setSearchInputOpen] = useState(false);
  const [searchOptions, setSearchOptions] = useState([]);
  const [data, setData] = useState([]);
  const loading = searchInputOpen && searchOptions.length === 0;

  useEffect(() => {
    let active = true;

    if (!searchInputOpen || inputValue === '') {
      return undefined;
    }

    const searchResults = findBySubstr(inputValue);
    if (active) {
      setSearchOptions(searchResults);
    }

    return () => {
      active = false;
    };
  }, [inputValue, searchInputOpen]);

  const containerRef = useRef();

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
  };

  const handleOpen = () => {
    setSearchInputOpen(true);
  };

  const handleClose = () => {
    setSearchInputOpen(false);
  };

  const handleRemoveLocation = (item) => {
    item.artworks.forEach(artwork => {
      setSelectedElements(selectedElements.filter(element => element !== artwork));
    });
    setData(data.filter(element => element.location !== item.location));
  };

  // const handleDragLocation = (item) => {
  //   setData(data.filter(element => element.location !== item.location));
  // };

  const onStopsOrderChange = (data) => {
    setData(data);
  };

  useEffect(() => {
    let active = true;

    if (!searchInputOpen || inputValue === '') {
      return undefined;
    }

    return () => {
      active = false;
    };
  }, [searchInputOpen, inputValue]);

  useEffect(() => {
    console.log("selectedelements", selectedElements)
    let groupedByLocation = [];
    if (selectedElements.length > 0) {
      const groupedObject = selectedElements.reduce((acc, element) => {
        const location = element.location;
        if (!acc[location]) {
          acc[location] = [];
        }
        acc[location].push(element);
        return acc;
      }, {});
  
      groupedByLocation = Object.keys(groupedObject).map(location => ({
        location,
        artworks: groupedObject[location]
      }));
  
      setData(groupedByLocation);
    }
    }, [selectedElements]);
  
  return (  
    <div className="z-50 flex flex-col-reverse lg:flex-row">
      <section className={`responsive-left-panel relative w-full`}>
        <div id="itinerary" className={`px-4 md:px-12 my-5 mx-auto max-w-4xl pt-40`} ref={containerRef}  >
          <DraggableList 
            itemKey={"location"}
            list={data}
            template={(props) => <ItineraryStop {...props} onRemoveLocation={handleRemoveLocation} />}
            container={() => containerRef.current}
            constrainDrag={true}
            onMoveEnd={(newList) => onStopsOrderChange(newList)}
          />
          <div className="text-tp-purple-2 relative flex w-full items-center gap-2 pr-0">
            <Autocomplete
              sx={{ 
                width: '100%',
                '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'black',
                  borderWidth: '2px',
                },
                '& .Mui-focused .MuiInputLabel-root': {
                  borderColor: 'black',
                  borderWidth: '2px',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgb(228,228,228)',
                  borderWidth: '1px',
                },
                '&:hover .MuiInputLabel-root': {
                  borderColor: 'rgb(228,228,228)',
                  borderWidth: '1px',
                },
              }}
              open={searchInputOpen}
              onOpen={handleOpen}
              onClose={handleClose}
              getOptionLabel={(option) => { return option.title}}
              options={searchOptions}
              filterOptions={(x) => {
                const filteredOptions = x.filter(option => option.title && option.title.trim() !== '');
                return filteredOptions;
              }}                    
              loading={loading}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              onChange={(event, newValue) => {
                if (newValue) {
                  const newElement = { ...newValue, index: selectedElements.length };
                  setSelectedElements([...selectedElements, newElement]);
                }
              }}
              renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                // matches.map((match: any) => {
                //   console.log("match", match)
                // });
                // const parts = parse(
                //   searchOptions.structured_formatting.main_text,
                //   matches.map((match: any) => [match.offset, match.offset + match.length]),
                // );
                return (
                  <li key={key} {...optionProps}>
                    <img src={option.artworkImg} alt={option.title} className="w-8 h-8 mr-2" />
                    {option.title} - {option.artist}
                  </li>
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  onInputChange={handleInputChange}
                />
              )}
            />
          </div>
        </div>
      </section>
      <section className="w-full lg:w-1/2">
      {/* <LoadScript googleMapsApiKey="AIzaSyBmU6mpjIB1C1TxXf5TrvLX2XpJZiBVdQs">
        <GoogleMapComponent locations={[]} />
      </LoadScript> */}
      </section>
    </div>
  );
}

export default NewItineraryPage;