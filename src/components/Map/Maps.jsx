import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';

import mapStyle from './mapStyle';

const libraries = ['places'];
const mapContainerStyle = {
  width: '20vw',
  height: '25vh',
};
const center = {
  lat: 43.653225,
  lng: -79.383186,
};
const options = {
  styles: mapStyle,
  disableDefaultUI: true,
  zoomControl: true,
};

export const Maps = ({ location }) => {
  //   const { isLoaded, loadError } = useLoadScript({
  //     googleMapsApiKey: 'AIzaSyCTGBS7qYB7AzqGm6UnPCiYLyz45M-NdjM',
  //     libraries,
  //   });

  //   if (loadError) return 'Error loading maps';
  //   if (!isLoaded) return 'Loading Maps';

  return (
    <div>
      <h1 className='map-title'>
        <span role='img' aria-label='tent'>
          🏫
        </span>
      </h1>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={11}
        center={{ lat: location.lat, lng: location.lng }}
        options={options}
      ></GoogleMap>
    </div>
  );
};
