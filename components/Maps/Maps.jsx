import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import styles from '../Maps/maps.module.css'
import { FaSearch } from 'react-icons/fa';
import { GiPositionMarker } from 'react-icons/gi';
import {CiSliderVertical} from 'react-icons/ci'
const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 33.5731,
  lng: -7.5898,
};

function Map() {
  const handleInputChange = () => {
    // Code pour traiter les changements de saisie
  };

  return (
    <div className={styles.top}>
      <div className={styles.top_seconde}>
      <div className={styles.input_container_ver}>
          <input
            type="text"
            placeholder="Filtrer"
            className={styles.input_text}
            onChange={handleInputChange}
          />
          <span className={styles.search_icon}>
            <CiSliderVertical />
          </span>
        </div>
        <div className={styles.input_container}>
          <input
            type="text"
            placeholder="Quelle école cherchez-vous?"
            className={styles.input_text}
            onChange={handleInputChange}
          />
          <span className={styles.search_icon}>
            <FaSearch />
          </span>
        </div>
        <div className={styles.input_container}>
          <input
            type="text"
            placeholder="Emplacement (Adresse, quartier, ville, région)"
            className={styles.input_text}
            onChange={handleInputChange}
          />
          <span className={styles.search_icon}>
            <GiPositionMarker />
          </span>
        </div>
      </div>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center} 
          zoom={14}
        />
      </LoadScript>
      <div>
      </div>
    </div>
  );
}

export default Map;
