import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './QRPage.module.css';

const QRPage = () => {
  const { type } = useParams();
  
  const dummyQR = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=dummy-data";

  return (
    <div className={styles.container}>
      <h1>{type.charAt(0).toUpperCase() + type.slice(1)} Scan</h1>
      <div className={styles.qrContainer}>
        <img src={dummyQR} alt="QR Code" className={styles.qrCode} />
      </div>
    </div>
  );
};

export default QRPage; 