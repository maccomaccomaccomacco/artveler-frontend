'use client';
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap, Popup } from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import 'leaflet-geosearch/dist/geosearch.css';
import L from 'leaflet';
import { useLeafletContext } from '@react-leaflet/core';


export default function Map({places}) {
  const [geoData, setGeoData] = useState({ lat: 40.8518, lng: 14.2681 });
  const center = [geoData.lat, geoData.lng];

  const naplesBounds = [
    [40.7858, 14.1131], // Southwest corner
    [40.9288, 14.3476], // Northeast corner
  ];

  return (
    <MapContainer center={center} zoom={12} style={{ flex: "1", zIndex: "40" }} className="h-full w-full sm:flex:1" maxBounds={{}}>
      {/* <SearchBar /> */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        places.map(item => (
          <Marker 
            position={[item.location[0], item.location[1]]} 
            icon={ L.icon({
              iconUrl: 'map-marker.svg',
              iconRetinaUrl: 'map-marker.svg',
              iconSize: [30, 30],
              iconAnchor: [item.location[0], item.location[1]],
              popupAnchor: [item.location[0], item.location[1]],
              shadowUrl: null,
              shadowSize: null,
              shadowAnchor: null,
              style: {backgroundColor: "transparent"},
          }) }
          >
            {/* <Popup>
              <div>
                <h3>{item.street_or_square}, {item.city} </h3>
              </div>
              <div style={{marginTop: "5px"}}>
                {item.description.map( item => item.children[0].text + " " )}
              </div>
            </Popup> */}
          </Marker>
        ))
      }
    </MapContainer>
  );
}
