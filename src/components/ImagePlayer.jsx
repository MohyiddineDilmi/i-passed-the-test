import React, { useState, useRef, useEffect } from 'react';
import styles from '../modules/styles.module.css';

const ImagePlayer = ({ title, description, images, duration }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef();
  const observerRef = useRef();
  const intervalRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // show image when it's at least 50% visible
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Load the image
        const image = new Image();
        image.src = images[currentImageIndex];
        image.onload = () => {
          imageRef.current.style.opacity = 0;
          imageRef.current.style.transform = 'scale(0.9)';
          setTimeout(() => {
            imageRef.current.style.opacity = 1;
            imageRef.current.style.transform = 'scale(1)';
          }, 10);
          imageRef.current.src = image.src;
        };
      }
    }, options);

    observerRef.current = observer;

    observer.observe(imageRef.current);

    return () => {
      observerRef.current.disconnect();
      clearInterval(intervalRef.current);
    };
  }, [images, currentImageIndex]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (currentImageIndex === images.length - 1) {
        setCurrentImageIndex(0);
      } else {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    }, duration * 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [images, currentImageIndex, duration]);

  useEffect(() => {
    const transitionDuration = 500; // Transition duration in milliseconds

    // Schedule the transition just before the image duration ends
    const transitionTimeout = setTimeout(
      () => {
        imageRef.current.style.opacity = 0;
        imageRef.current.style.transform = 'scale(0.98)';
        setTimeout(() => {
          if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
          } else {
            setCurrentImageIndex(0);
          }
        }, transitionDuration);
      },
      (duration - transitionDuration / 200) * 1000
    );

    return () => {
      clearTimeout(transitionTimeout);
      clearInterval(intervalRef.current);
    };
  }, [currentImageIndex, duration, images]);

  return (
    <div
      style={{
        borderRadius: '10%',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <img
        src={images[currentImageIndex]}
        ref={imageRef}
        style={{
          objectFit: 'cover',
          // position: 'absolute',
          borderRadius: '10%',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          transition: 'opacity 0.5s, transform 0.5s',
          opacity: 1,
          transform: 'scale(1)',
        }}
        alt="Slideshow"
      />
      <div className="textContainer">
        <h1 className={styles.title_primary_white}>{title}</h1>
        <p className={styles.text_dark_mode}>{description}</p>
      </div>
    </div>
  );
};

export default ImagePlayer;
