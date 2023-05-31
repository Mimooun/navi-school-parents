"use client";
import React, { useState } from 'react';
import styles from '../Block/block.module.css';
import { FaSearch } from 'react-icons/fa';
import {GiPositionMarker} from 'react-icons/gi'
import Button from '@mui/material/Button';
import Search from '../Search/Search';

function Block() {
  const [showSearch, setShowSearch] = useState(false);

  const handleInputChange = () => {
    setShowSearch(true);
  };
   const handleCloseSearch = () => {
    setShowSearch(false);
  }; 


 
  return (
    <section className={styles.block}>
      <div className={styles.top}>
        <div className={styles.top_first}>
          <div>Ecoles </div>
          <div>Activités parascolaires</div>
        </div>
        <div className={styles.top_seconde}>
          <div className={styles.input_container}>
            <input type="text" placeholder='Quelle école cherchez-vous?' className={styles.input_text} onClick={handleInputChange} />
            <span className={styles.search_icon}><FaSearch /></span>
          </div>
          <div className={styles.input_container}>
            <input type="text" placeholder='Emplacement (Adresse, quartier, ville, région)' className={styles.input_text} />
            <span className={styles.search_icon}><GiPositionMarker /></span>
          </div>
        </div>
        <div className={styles.bottom_seconde}>
          <div className={styles.card}>
            <div className={styles.dm}>Secteur :</div>
            <div className={styles.fr}> Publique </div>
            <div className={styles.fr}> Privée </div>

          </div>

          <div className={styles.card}>
            <div className={styles.dm}>Cycle :</div>
            <div className={styles.fr}> Pré <br /> scolaire </div>
            <div className={styles.fr}> Primaire </div>
            <div className={styles.fr}>  Collège</div>
            <div className={styles.fr}> Lycée </div>
          </div>

          <div className={styles.card}>
            <div className={styles.dm}>Services :</div>
            <div className={styles.fr}> Cantine </div>
            <div className={styles.fr}> Garde </div>
            <div className={styles.fr}> Transport <br /> scolaire </div>
            <div className={styles.fr}> Piscine </div>
          </div>

          <div className={styles.button}>

            <Button variant="contained" className={styles.Button}>Contained</Button>
          </div>
        </div>
      </div>

      {showSearch && (
        <div className={styles.search_container} >
          <Search onCloseSearch={handleCloseSearch} />
          {
          }
        </div>
      )}


    </section>
  );
}

export default Block;
