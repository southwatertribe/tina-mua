import React from 'react';
import styles from './styles/Main.module.css';
import Link from 'next/link';



export default function Home() {
  const handleRectangleClick = (rectangleNumber: number) => {
    // Handle the click event for each rectangle
    console.log(`Rectangle ${rectangleNumber} clicked!`);
    // You can add more logic here, like navigation or other actions
  }

  return (
    <div>
          <div className={styles.container}>
      <div className={styles.column}>
        <Link href="/about">
          <div className={`${styles.shape} ${styles.top} ${styles.shape4Top}`}></div>
            <img src="https://mail.google.com/mail/u/1?ui=2&ik=2b4ad438ad&attid=0.1.1&permmsgid=msg-f:1779713584652490115&th=18b2d0136f261583&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ95TRR4yQjqS1egeyn5_00hSnaFAdlXUDv6kkn_3iPiV9aw6pxS1STK-SKyRj2ycnj-vvutFGNwr9EhRvzuPi2M1qyVzwClwdLwfwXPWiQimvRpWSdAiYcTh_M&disp=emb" alt="Image 4" />
          <div className={`${styles.shape} ${styles.bottom} ${styles.shape4Bottom}`}></div>
          <span className={styles.centeredText}>ABOUT ME / BOOKING</span>
        </Link>
      </div>

      <div className={styles.column}>
        <Link href="/portfolio/bridal">
          <div className={`${styles.shape} ${styles.top} ${styles.shape1Top}`}></div>
              <img src="https://images.squarespace-cdn.com/content/v1/62b6d246cfb17458bffaf5a6/b0767f3c-02ed-4f60-8598-be004744d61e/3d92cac23b89126bf986bcf3d36efff7.jpg" alt="Image 1" />
          <div className={`${styles.shape} ${styles.bottom} ${styles.shape1Bottom}`}></div>
          <span className={styles.centeredText}>BRIDAL</span>
        </Link>
      </div>

      <div className={styles.column}>
        <Link href="/portfolio/sfx">
          <div className={`${styles.shape} ${styles.top} ${styles.shape2Top}`}></div>
            <img src="https://i.pinimg.com/736x/53/fe/f5/53fef50937093e69ec0361cc4e589fcb.jpg" alt="Image 2" />
          <div className={`${styles.shape} ${styles.bottom} ${styles.shape2Bottom}`}></div>
          <span className={styles.centeredText}>SFX</span>
        </Link>
      </div>

      <div className={styles.column}>
        <Link href="/portfolio/runway">
          <div className={`${styles.shape} ${styles.top} ${styles.shape3Top}`}></div>
              <img src="https://media.fashionnetwork.com/m/1ac6/d40c/79a6/10a1/9294/83be/59fb/9bed/13ba/2ea3/2ea3.jpg" alt="Image 3" />
          <div className={`${styles.shape} ${styles.bottom} ${styles.shape3Bottom}`}></div>
          <span className={styles.centeredText}>RUNWAY</span>
        </Link>
      </div>
    </div>
    <div>
      <h1>I love tina</h1>
      <h1>I love tina</h1>
      <h1>I love tina</h1>
      <h1>I love tina</h1>
      <h1>I love tina</h1>
      <h1>Hello Testing</h1>
      <h1>Hello Testing</h1>
      <h1>Hello Testing</h1>
      <h1>Hello Testing</h1>
    </div>
    </div>
  );
}
