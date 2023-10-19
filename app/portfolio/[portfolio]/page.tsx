import React from 'react'
import styles from "../../styles/Portfolio.module.css"

function getRandomClass() {
    const classes = ['cardTall', 'cardWide', ''];
    return classes[Math.floor(Math.random() * classes.length)];
  }
  

type Params = {
    params: {
        portfolio: string
    }
}

export interface Photo {
    id: number;
    imageURL: string;
    description: string;
  }
  

const photos: Photo[] = [
    {
      id: 1,
      imageURL: "https://loremflickr.com/300/200/bridal",
      description: "Elegant bridal makeup with a classic touch."
    },
    {
      id: 2,
      imageURL: "https://loremflickr.com/300/250/zombie",
      description: "SFX makeup showcasing a zombie look."
    },
    {
      id: 3,
      imageURL: "https://loremflickr.com/300/300/runway",
      description: "Runway makeup with bold colors."
    },
    {
      id: 4,
      imageURL: "https://loremflickr.com/300/350/bridal",
      description: "Bridal makeup with a modern twist."
    },
    {
      id: 5,
      imageURL: "https://loremflickr.com/300/400/vampire",
      description: "SFX makeup showcasing a vampire look."
    },
    {
      id: 6,
      imageURL: "https://loremflickr.com/300/450/runway",
      description: "Runway makeup with a metallic finish."
    },
    {
      id: 7,
      imageURL: "https://loremflickr.com/300/200/bridal",
      description: "Natural bridal makeup."
    },
    {
      id: 8,
      imageURL: "https://loremflickr.com/300/250/werewolf",
      description: "SFX makeup with a werewolf theme."
    },
    {
      id: 9,
      imageURL: "https://loremflickr.com/300/300/runway",
      description: "Runway makeup with a glossy finish."
    },
    {
      id: 10,
      imageURL: "https://loremflickr.com/300/350/bridal",
      description: "Bridal makeup with a focus on eyes."
    },
    {
      id: 11,
      imageURL: "https://loremflickr.com/300/400/alien",
      description: "SFX makeup showcasing an alien look."
    },
    {
      id: 12,
      imageURL: "https://loremflickr.com/300/450/runway",
      description: "Runway makeup with a matte finish."
    },
    {
      id: 13,
      imageURL: "https://loremflickr.com/300/200/bridal",
      description: "Bridal makeup with a vintage touch."
    },
    {
      id: 14,
      imageURL: "https://loremflickr.com/300/250/mummy",
      description: "SFX makeup showcasing a mummy look."
    },
    {
      id: 15,
      imageURL: "https://loremflickr.com/300/300/runway",
      description: "Runway makeup with shimmer."
    },
    {
      id: 16,
      imageURL: "https://loremflickr.com/300/350/bridal",
      description: "Bridal makeup with a focus on lips."
    },
    {
      id: 17,
      imageURL: "https://loremflickr.com/300/400/ghost",
      description: "SFX makeup showcasing a ghost look."
    },
    {
      id: 18,
      imageURL: "https://loremflickr.com/300/450/runway",
      description: "Runway makeup with a neutral palette."
    },
    {
      id: 19,
      imageURL: "https://loremflickr.com/300/200/bridal",
      description: "Bridal makeup with a boho touch."
    },
    {
      id: 20,
      imageURL: "https://loremflickr.com/300/250/fairy",
      description: "SFX makeup showcasing a fairy look."
    }
  ];
  
  
  

export default function PortfolioPage({params: {portfolio}}: Params) {
    return (
        <div className={styles.photoGrid}>
          {photos.map((photo) => (
            <div key={photo.id} className={`${styles.card} ${styles[getRandomClass()]}`}>
              <img src={photo.imageURL} alt={photo.description} />
            </div>
          ))}
        </div>
      );    
}
