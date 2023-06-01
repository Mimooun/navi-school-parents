"use client";
import React, { useState } from 'react';
import styles from '../Liste/liste.module.css'
import Image from 'next/image';
import Button from '@mui/material/Button';
import img1 from "../../public/assets/icons/alphabet.png"
import img2 from "../../public/assets/icons/cartable.png"
import img3 from "../../public/assets/icons/casquette-diplome.png"
import img4 from "../../public/assets/icons/livre.png"
import img5 from "../../public/assets/images/image 14.png"
import Info from '../../components/Info/Info';
function liste() {
    const [showInfo, setShowInfo] = useState(false);
  

  const handleInputChange = () => {
    setShowInfo(true);
  };
   const handleCloseInfo = () => {
    setShowInfo(false);
  };
  return (
    <section className={styles.liste}>
      <div className={styles.name}onClick={handleInputChange}>Groupe Scolaire GSR</div>
      <div className={styles.adresse}>328 Boulevard 2 Mars Casablanca</div>


      <div className={styles.domaine}>
        <div className={styles.wrapper}>
          <div> <Image className={styles.img} src={img1} alt="logo" /></div>
          <div className={styles.text}>Maternelle</div>
        </div>
        <div className={styles.wrapper}>
          <div> <Image className={styles.img} src={img2} alt="logo" /></div>
          <div className={styles.text}>Primaire</div>
        </div>
        <div className={styles.wrapper}>
          <div> <Image className={styles.img} src={img4} alt="logo" /></div>
          <div className={styles.text}>Collège</div>
        </div>
        <div>
          <div className={styles.wrapper}> <Image className={styles.img} src={img3} alt="logo" /></div>
          <div className={styles.text}>lyce</div>
        </div>
        <div className={styles.wrapper}>
          <div> <Image className={styles.img_schol} src={img5} alt="logo" /></div>
          
        </div>
      </div>
      <div className={styles.button}>
        <Button variant="contained" className={styles.Button}>Visite virtuelle</Button>
      </div>
    
      {showInfo&& (
        <div className={styles.search_container} >
          <Info onCloseInfo={handleCloseInfo} />
          {
          }
        </div>

        
      )}
    </section >
  )
}

export default liste
