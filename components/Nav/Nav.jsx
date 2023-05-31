import React from 'react'
import Image from 'next/image';
import logo from "../../public/assets/images/Logo-1 1(1).png"
import styles from '../Nav/nav.module.css'
function Nav() {
    return (
        <section className={styles.nav}>
            <Image
                className={styles.logo}
                src={logo}
                alt="logo"
            />
        </section>
    )
}

export default Nav
