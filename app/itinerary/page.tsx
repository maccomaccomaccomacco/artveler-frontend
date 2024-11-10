"use client"
import React, { useState, useEffect, useRef } from 'react';
import { findBySubstr } from '../../lib/searcher';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import DraggableList from "react-draggable-list";
import ItineraryStop from '../../components/itineraryStop';
import GoogleMapComponent from './GoogleMapComponent';
import { 
  LoadScript,
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer, } from '@react-google-maps/api';

  const center = {
    lat: 7.8731,
    lng: 80.7718,
  };
function NewItineraryPage() {  
  const [selectedElements, setSelectedElements] = useState([]);
  const [inputValue, setInputValue] = useState('Search for an artwork');
  const [searchInputOpen, setSearchInputOpen] = useState(false);
  const [searchOptions, setSearchOptions] = useState([]);
  const [data, setData] = useState([]);
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const loading = searchInputOpen && searchOptions.length === 0;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD9WQG72IWNBR7D9AoE-OA638zjZZlYBL8",
  });
  
  async function calculateRoute() {
    if (data.length < 2) return;
  
    const directionsService = new window.google.maps.DirectionsService();
    let allDirections = [];
  
    for (let i = 0; i < data.length - 1; i++) {
      const origin = data[i].location;
      const destination = data[i + 1].location;
  
      const results = await directionsService.route({
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      });
  
      allDirections.push(results);
    }
  
    setDirectionsResponse(allDirections);
  }

  useEffect(() => {
    calculateRoute();
  }, [data]);
  
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

  const handleRemovePiece = (artwork) => {
    setSelectedElements(selectedElements.filter(element => element !== artwork));
  };

  const onStopsOrderChange = (data) => {
    setData(data);
  };

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

  useEffect(() => {
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
    <div className="flex flex-row h-full">
      <div id="itinerary" className={`flex-1 pt-12 px-12 pb-36 overflow-y-auto`} ref={containerRef}  >
        <h1 className="text-2xl font-bold text-gray-800 pt-16 mb-4">Create your itinerary</h1>
        <DraggableList 
          itemKey={"location"}
          list={data}
          template={(props) => <ItineraryStop {...props} onRemoveLocation={handleRemoveLocation} onRemovePiece={handleRemovePiece} />}
          container={() => containerRef.current}
          constrainDrag={true}
          onMoveEnd={(newList) => onStopsOrderChange(newList)}
          onDragStart={() => {console.log("okay")}}
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
      <div className="flex-1">
        {isLoaded ? 
        
          <GoogleMap
            center={center}
            zoom={5}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={(map) => setMap(map)}
            mapContainerStyle={{
              width: '100%',
              height: '100%'
            }} 
          >
            {directionsResponse && directionsResponse.map((direction, index) => (
              <DirectionsRenderer key={index} directions={direction} />
            ))}
          </GoogleMap>
          : 
          <div>Loading...</div>
        }
      </div>
    </div>
  );
}

export default NewItineraryPage;