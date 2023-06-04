import React from 'react'
import Image from 'next/image';
import styles from '../Description/description.module.css'
import { CiLocationOn } from 'react-icons/ci'
import { BsTelephone, BsFacebook } from 'react-icons/bs'
import { AiOutlineLaptop } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'
import ico1 from '../../public/assets/icons/alphabet.png'
import ico2 from '../../public/assets/icons/cartable.png'
import ico3 from '../../public/assets/icons/livre.png'
import ico4 from '../../public/assets/icons/casquette-diplome.png'

function Description() {
  return (
    <section className={styles.descript}>
      <div className={styles.contact}>
        <div className={styles.cont}>
          <div className={styles.ico}><CiLocationOn /></div>
          <div>347 BD ambassafeur ben Aicha, Casablanca</div>
        </div>
        <div className={styles.ligne}></div>
        <div className={styles.cont}>
          <div className={styles.ico}><BsTelephone /></div>
          <div>+212 5 65 33 32</div>
          <div>+212 5 65 33 32</div>
        </div>
        <div className={styles.ligne}></div>
        <div className={styles.cont}>
          <div className={styles.ico}><AiOutlineLaptop /></div>
          <div>www.gsr.ma</div>
        </div>
        <div className={styles.ligne}></div>
        <div className={styles.cont}>
          <div className={styles.ico}><BsFacebook /></div>
          <div>www.faccebok.com/gslaresidence/?hl=fr</div>
        </div>
        <div className={styles.ligne}></div>
        <div className={styles.cont}>
          <div className={styles.ico}><FaInstagramSquare /></div>
          <div>www.instagram.com/gslaresidence/?hl=fr</div>
        </div>
      </div>
      {/* deuxieme partie   */}

      <div className={styles.wrapper}>
        <div className={styles.wr}>Description</div>
        <div className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi veniam natus consectetur deserunt sunt aliquid. Alias voluptatibus aut autem ex?</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.wr}>Cycles</div>
      </div>
      <div className={styles.domaine}>
        <div className={styles.wrapper}>
          <div> <Image className={styles.img} src={ico1} alt="logo" /></div>
          <div className={styles.text}>Maternelle</div>
        </div>
        <div className={styles.wrapper}>
          <div> <Image className={styles.img} src={ico2} alt="logo" /></div>
          <div className={styles.text}>Primaire</div>
        </div>
        <div className={styles.wrapper}>
          <div> <Image className={styles.img} src={ico3} alt="logo" /></div>
          <div className={styles.text}>Collège</div>
        </div>
        <div>
          <div className={styles.wrapper}> <Image className={styles.img} src={ico4} alt="logo" /></div>
          <div className={styles.text}>lyce</div>
        </div>
      </div>


      {/* Services partie */}

      <div className={styles.wrapper}>
        <div className={styles.wr}>Service</div>
      </div>
      <div className={styles.service}>
        <div className={styles.serv}>
            <div>Cantine / Garde repas</div>
            <div>Soutien scolaire</div>
        </div>
        <div className={styles.serv}>
            <div>Transport Scolaire</div>
            <div>Bibliothèque</div>
        </div>
        <div className={styles.serv}>
            <div>Piscine Scolaire</div>
            <div>Garderie</div>
        </div>
      </div>
       {/* Services Pédagogie */}
       <div className={styles.wrapper}>
        <div className={styles.wr}>Pédagogie</div>
      </div>
      <div className={styles.pedagogie}>
        <div className={styles.peda}>
            <div className={styles.text}>Pédagogie Montessori</div>
            <div className={styles.text}>Cambrige</div>
        </div>
        <div className={styles.peda}>
            <div className={styles.text}>Enseignement Trilingue</div>
            <div className={styles.text}>Education Musicale</div>
        </div>
        
      </div>
    </section>

  )
}

export default Description
