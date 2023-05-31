import React from 'react'
import { useEffect } from 'react';
 import { useRouter } from 'next/navigation';
 import Image from 'next/image';
import logo from '../../public/assets/images/Logo-1 1(1).png';
import styles from '../Splach/splach.module.css'

function Splash() {
  const router =useRouter ();
   useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/menu');
    },30);

    return () => clearTimeout(timer);
  } , [router]);
  
  return (
    
      <section className={styles.splache}>
          <Image
              className={styles.logo}
              src={logo}
              alt="logo"
          />
          
          

      </section>
  )
}

export default Splash