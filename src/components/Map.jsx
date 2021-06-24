import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Map({ data }) {
  const mapStyles = {
    height: '40vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: Number(data.lat).valueOf(),
    lng: Number(data.lng).valueOf(),
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDTJRdwTi2LKOe8hvPrzjDEqlV-Z5mO7g0">
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
