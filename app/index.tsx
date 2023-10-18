import React from 'react';
import styles from '../styles/Main.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.column1}>
        <div className={`${styles.shape} ${styles.top}`}></div>
        <img src="/path-to-your-image1.jpg" alt="Image 1" />
        <div className={`${styles.shape} ${styles.bottom}`}></div>
      </div>
      <div className={styles.column2}>
        <div className={`${styles.shape} ${styles.top}`}></div>
        <img src="/path-to-your-image2.jpg" alt="Image 2" />
        <div className={`${styles.shape} ${styles.bottom}`}></div>
      </div>
      <div className={styles.column3}>
        <div className={`${styles.shape} ${styles.top}`}></div>
        <img src="/path-to-your-image2.jpg" alt="Image 3" />
        <div className={`${styles.shape} ${styles.bottom}`}></div>
      </div>
      <div className={styles.column4}> 
        <div className={`${styles.shape} ${styles.top}`}></div>
        <img src="/path-to-your-image4.jpg" alt="Image 4" />
      <div className={`${styles.shape} ${styles.bottom}`}></div>
    </div>
    </div>
  );
}

export default Home;
