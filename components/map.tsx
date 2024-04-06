'use client';
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap, Popup, ZoomControl } from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import 'leaflet-geosearch/dist/geosearch.css';
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster'

const customIcon = L.icon({
  iconUrl: '/marker-light-green.png',
  iconShadow: '/marker-light-green.png',
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
  shadowSize: [41, 41], // size of the shadow
  iconSize: [32, 32]
});

export default function Map({places}) {
  const [geoData, setGeoData] = useState({ lat: 40.8518, lng: 14.2681 });
  const center = [geoData.lat, geoData.lng];

  const naplesBounds = [
    [40.7858, 14.1190], // Southwest corner
    [40.7858, 14.1131], // Southwest corner
    [40.9288, 14.3476], // Northeast corner
  ];

  return (
    <MapContainer zoomControl={false} center={center} zoom={12} style={{ flex: "1", zIndex: "40" }} className="h-full w-full sm:flex:1 rounded-md" >
      {/* <SearchBar /> */}
      <ZoomControl position='bottomright' />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
      />
        <MarkerClusterGroup
          chunkedLoading
        >
          {places.map((place, index) => (
            <Marker
              key={index}
              position={[place.location[0], place.location[1]]}
              title={place.address}
              icon={customIcon}
            ></Marker>
          ))}
        </MarkerClusterGroup>
    </MapContainer>
  );
}
