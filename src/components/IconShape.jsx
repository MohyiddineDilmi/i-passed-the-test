import React from 'react';
import styles from '../modules/styles.module.css';

const IconShape = ({ color, title, myIcon, description }) => {
  return (
    <div style={{ maxWidth: '1140px', margin: '40px auto' }}>
      {' '}
      {/* Container with max-width */}
      <div style={{ position: 'relative', display: 'flex' }}>
        {/* Background with blur effect */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            width: '60px',
            height: '60px',
            margin: '20px',

            border: 'none',
            borderRadius: '30px',
            backgroundColor: color,
            filter: 'blur(30px)',
            opacity: '70%',
            zIndex: -1, // Push behind the button
          }}
        ></div>
        {/* Icon */}
        <div
          style={{
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
            width: '60px',
            height: '60px',
            margin: '20px',
            zIndex: 1, // Ensure icon is above background
          }}
        >
          <img
            src={myIcon}
            alt="Custom Icon"
            style={{
              position: 'absolute',
              width: '42px',
              height: '42px',
              fill: color,
            }}
          />
        </div>
        <div
          style={{
            color: 'white',
            transform: 'translateY(0%)',
            marginLeft: '30px',
            width: '12rem',
          }}
        >
          <h1 className={`${styles.title_white}`}>{title}</h1>
          <p className={`${styles.text_no_margin}`}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default IconShape;
