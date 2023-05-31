import React from 'react'
import styles from '../Subnav/subnav.module.css'
import {BiLocationPlus} from 'react-icons/bi'
import {FaBusAlt , FaUser} from 'react-icons/fa'
import {TbMessages} from 'react-icons/tb'
function Subnav() {
  return (
    <section className={styles.subnav}>
        <div className={styles.icons}>
            <BiLocationPlus />
            <FaBusAlt />
            <TbMessages />
            <FaUser />
        </div>

      
    </section>
  )
}

export default Subnav
