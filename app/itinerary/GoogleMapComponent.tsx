import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 48.86046634339421, 
  lng: 2.337708363608716
};

interface GoogleMapComponentProps {
  locations: string[];
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ locations }) => {
  const [coordinates, setCoordinates] = useState<{ lat: number, lng: number }[]>([]);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    const geocodeLocations = async () => {
      if (window.google && window.google.maps) {
        const geocoder = new window.google.maps.Geocoder();
        const coords = await Promise.all(locations.map(location => {
          return new Promise<{ lat: number, lng: number }>((resolve, reject) => {
            geocoder.geocode({ address: location }, (results, status) => {
              if (status === 'OK' && results[0]) {
                resolve(results[0].geometry.location.toJSON());
              } else {
                console.error(`Geocode was not successful for the following reason: ${status}`);
                reject(status);
              }
            });
          });
        }));
        setCoordinates(coords);
      }
    };

    if (locations.length > 0) {
      geocodeLocations();
    }
  }, [locations]);

  useEffect(() => {
    if (map && coordinates.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      coordinates.forEach(coord => {
        bounds.extend(coord);
      });
      map.fitBounds(bounds);
    }
  }, [map, coordinates]);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={map => setMap(map)}
    >
      {coordinates.map((coord, index) => (
        <Marker
          key={index}
          position={coord}
        />
      ))}
    </GoogleMap>
  );
};

export default GoogleMapComponent;