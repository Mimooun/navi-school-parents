import React, { useState } from 'react';
import styles from '../Search/search.module.css';
import { FaSearch } from 'react-icons/fa';
import {BsFillSendFill} from 'react-icons/bs'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Distance from '../Distance/Distance'
function Search({ onCloseSearch }) {
  const [showComponent, setShowComponent] = useState(false);

  const handleProximityButtonClick = () => {
    setShowComponent(true);
  };

  const handleInputChange = () => {
    setShowComponent(false);
  };

  return (
    <section className={styles.search}>
      <div className={styles.title}>
        Où voulez-vous effectuer <br /> vos recherches
      </div>
      <div className={styles.container_search}>
        <div className={styles.input_container}>
          <TextField
            id="standard-basic"
            variant="standard"
            placeholder="Saisir l’emplacement de l’école recherchée"
            className={styles.TextField}
            onClick={handleInputChange}
          />
          <span className={styles.search_icon}><FaSearch /></span>
        </div>

        <div className={styles.input_container_proxi}>
          <Button variant="contained" className={styles.Button} onClick={handleProximityButtonClick}>
            à proximité
          </Button>
          <span className={styles.search_icon_proxi}><BsFillSendFill /></span>
        </div>

        {showComponent && (
          <div>
           
            <Distance />
          </div>
        )}

        {!showComponent && (
          <div className={styles.ligne}>
            <div className={styles.rue}>
            <p>adrs 1</p>
            <p>adrs 2</p>
            <p>adrs 3</p>
            <p>adrs 4</p>
          </div>
          </div>
        )}

        
        
        <div className={styles.container_button}>
          <Button variant="contained" className={styles.close_button} onClick={onCloseSearch}>
            Close
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Search;
``
