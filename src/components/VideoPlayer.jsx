import React, { useState, useRef, useEffect } from 'react';
import styles from '../modules/styles.module.css';

const VideoPlayer = ({ title, description, videoUrls }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef();

  useEffect(() => {
    const videoElement = videoRef.current;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // play video when it's at least 50% visible
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (videoElement.paused) {
          videoElement.play().catch((error) => {
            console.error('Error attempting to play video:', error);
          });
        }
      } else {
        if (!videoElement.paused) {
          videoElement.pause();
        }
      }
    }, options);

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, [videoUrls, currentVideoIndex]);

  const handleVideoEnd = () => {
    if (currentVideoIndex === videoUrls.length - 1) {
      setCurrentVideoIndex(0);
    } else {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    const transitionPoint = 0.1; // Adjust this value to determine when the transition should start (in seconds)
    const remainingTime = video.duration - video.currentTime;

    if (remainingTime <= transitionPoint) {
      // Start the smooth transition here
      video.style.opacity = remainingTime / transitionPoint;
    } else {
      video.style.opacity = 1;
    }
  };

  // Check if videoUrls is undefined or empty
  if (!videoUrls || videoUrls.length === 0) {
    return <div>No video URLs provided.</div>;
  }

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
      <video
        src={videoUrls[currentVideoIndex]}
        onEnded={handleVideoEnd}
        onTimeUpdate={handleTimeUpdate} // Added timeupdate event listener
        ref={videoRef}
        style={{
          objectFit: 'cover',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
        }}
        muted
        autoPlay
      />
      <div className="textContainer">
        <h1 className={styles.title_primary_white}>{title}</h1>
        <p className={styles.text_dark_mode}>{description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
