// == Import
import React from 'react';

import PropTypes from 'prop-types';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';

import maker from 'src/assets/images/map-marker/marker-icon-2x.png';
import shadow from 'src/assets/images/map-marker/marker-icon-shadow-2x.png';

// == Import
import './map.scss';

// == Composant
const MapShop = ({
  company_name,
  coordinates,
  id,
}) => {
  const coordinate = JSON.parse(coordinates);
  const longitude = coordinate[0];
  const latitude = coordinate[1];

  const myIcon = L.icon({
    iconUrl: maker,
    shadowUrl: shadow,
    iconSize: [40, 52], // size of the icon
    shadowSize: [59, 27], // size of the shadow
    iconAnchor: [20, 52], // point of the icon which will correspond to marker's location
    shadowAnchor: [10, 27], // the same for the shadow
    popupAnchor: [0, -52], // point from which the popup should open relative to the iconAnchor
  });

  return (
    <>
      {coordinates && (
        <MapContainer
          key={id}
          className="map"
          center={[longitude, latitude]}
          zoom={18}
          scrollWheelZoom
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[longitude, latitude]} icon={myIcon}>
            <Popup>
              {company_name}
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </>
  );
};

MapShop.propTypes = {
  company_name: PropTypes.string.isRequired,
  coordinates: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

// == Export
export default MapShop;
