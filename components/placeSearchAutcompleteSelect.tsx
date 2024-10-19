"use client"
import React, { useState, useEffect } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import Select from 'react-select';

const libraries = ['places'];

const PlaceSearchAutocompleteSelect = ({ onSelectedPlacesChange }) => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [autocompleteService, setAutocompleteService] = useState(null);
  const [placesService, setPlacesService] = useState(null);
  
  // Load Google Maps script
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBmU6mpjIB1C1TxXf5TrvLX2XpJZiBVdQs', // replace with your API key
    libraries,
  });

  useEffect(() => {
    if (isLoaded && !autocompleteService) {
      setAutocompleteService(new window.google.maps.places.AutocompleteService());
    }
    if (isLoaded && !placesService) {
      setPlacesService(new window.google.maps.places.PlacesService(document.createElement('div')));
    }
  }, [isLoaded, autocompleteService, placesService]);

  const handleInputChange = (value) => {
    setInput(value);

    if (value) {
      autocompleteService.getPlacePredictions(
        { input: value },
        (predictions, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setSuggestions(predictions.map(prediction => ({
              value: prediction.place_id,
              label: prediction.description
            })));
          } else {
            setSuggestions([]);
          }
        }
      );
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectChange = (selectedOptions) => {
    const placesPromises = selectedOptions.map(option => {
      return new Promise((resolve, reject) => {
        placesService.getDetails({ placeId: option.value }, (place, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            resolve({
              ...option,
              coordinates: {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
              }
            });
          } else {
            reject(status);
          }
        });
      });
    });

    Promise.all(placesPromises)
      .then(results => {
        setSelectedPlaces(results);
        onSelectedPlacesChange(results);
      })
      .catch(error => {
        console.error('Error fetching place details:', error);
      });
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
      <Select
         classNames={{container: () => 'w-full', control: () => '!rounded-full !min-h-10'}}
        inputValue={input}
        onInputChange={handleInputChange}
        options={suggestions}
        onChange={handleSelectChange}
        value={selectedPlaces}
        isMulti
        placeholder="Search for places"
        styles={{
          container: (provided) => ({
            ...provided,
          }),
          indicatorsContainer: (provided) => ({
            ...provided,
            display: 'none',
          }),
        }}
      />
  );
};

export default PlaceSearchAutocompleteSelect;