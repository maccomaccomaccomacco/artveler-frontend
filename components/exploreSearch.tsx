import React, { useState } from 'react';
import PlaceSearchAutocompleteSelect from './placeSearchAutcompleteSelect';
import locationsData from '@/data/locations.json'; // Assuming locations.json is in the same directory
import artworksData from '@/data/output.json'; // Assuming output.json is in the same directory
import SearchIcon from '@mui/icons-material/Search';

const ExploreSearch = ({onResults, onSelectPlace}) => {
    const [selectedPlaces, setSelectedPlaces] = useState([]);

    const handleSelectedPlacesChange = (places) => {
        setSelectedPlaces(places);
    };

    const triggerArtworksResearch = async () => {
        const nearbyLocations = [];
        for (const place of selectedPlaces) {
            nearbyLocations.push(...getNearbyLocations(place.coordinates.lat, place.coordinates.lng));
        }
        const artworks = await getArtworksInLocations(nearbyLocations);
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

    async function getArtworksInLocations(locations) {
        const locationNames = locations.map(location => location.name);
        try {
            const response = await fetch('/api/artworks');
            const artworksData = await response.json();
            return artworksData.filter(artwork => locationNames.includes(artwork.location));
        } catch (error) {
            console.error('Error fetching artworks:', error);
            return [];
        }
    }

    return (
        <div className='flex flex-row w-full relative'>
            <PlaceSearchAutocompleteSelect onSelectedPlacesChange={handleSelectedPlacesChange} />
            <button className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-1 px-1 h-8 w-8 rounded-full absolute right-1 top-1" onClick={triggerArtworksResearch}>
                <SearchIcon fontSize='small' className='relative' sx={{ color: 'rgb(255,255,255)' }}  />
            </button>
        </div>
    );
};

export default ExploreSearch;