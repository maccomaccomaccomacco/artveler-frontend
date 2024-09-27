import React, { useState } from 'react';
import PlaceSearchAutocompleteSelect from './placeSearchAutcompleteSelect';
import locationsData from '@/data/locations.json'; // Assuming locations.json is in the same directory
import artworksData from '@/data/output.json'; // Assuming output.json is in the same directory

const ExploreSearch = ({onResults, onSelectPlace}) => {
    const [selectedPlaces, setSelectedPlaces] = useState([]);

    const handleSelectedPlacesChange = (places) => {
        setSelectedPlaces(places);
    };

    const triggerArtworksResearch = () => {
        const nearbyLocations = [];
        for (const place of selectedPlaces) {
            nearbyLocations.push(...getNearbyLocations(place.coordinates.lat, place.coordinates.lng));
        }
        const artworks = getArtworksInLocations(nearbyLocations);
        console.log(artworks);
        onResults(artworks);
        onSelectPlace(selectedPlaces);
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
        <div>
        <PlaceSearchAutocompleteSelect onSelectedPlacesChange={handleSelectedPlacesChange} />
        <button onClick={triggerArtworksResearch}>CLICCA</button>
        </div>
    );
};

export default ExploreSearch;