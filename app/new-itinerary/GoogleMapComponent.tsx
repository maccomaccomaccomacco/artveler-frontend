
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
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
  const [map, setMap] = useState(null);

  useEffect(() => {
    console.log(locations)
    const geocodeLocations = async () => {
      if (window.google && window.google.maps) {
        console.log('Geocoding locations...');
        const geocoder = new window.google.maps.Geocoder();
        const coords = await Promise.all(locations.map(location => {
          return new Promise<{ lat: number, lng: number }>((resolve, reject) => {
            geocoder.geocode({ address: location }, (results, status) => {
              if (status === 'OK' && results[0]) {
                resolve(results[0].geometry.location.toJSON());
              } else {
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