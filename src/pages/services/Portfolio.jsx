import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import YoutubePlayer from '../../components/YoutubePlayer';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from '../../modules/styles.module.css';



const Portfolio = () => {
  const { t } = useTranslation();
  const carouselRef = useRef(null); // Ref for accessing the carousel container

  // Video IDs for the carousel
  const videoIds = [
    'xNhPAPoKYXk',
    'hXD8itTKdY0',
    'EC3P-DAf1Gw',
    'NJ211a7yPsI',
    'ndTZAj9abSw',
    'W0PrnBQs_W4',
    'e7jTlQdZEic',
  ];

  // Function to scroll the carousel smoothly
  const scrollTo = (scrollOffset) => {
    if (carouselRef.current) {
      const newScrollLeft = carouselRef.current.scrollLeft + scrollOffset;
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth', // Smooth scrolling behavior
      });
    }
  };

  // Inline styles for the portfolio container, sections, carousel, and video player
  const portfolioContainerStyle = {
    padding: '0rem 0rem 5rem 0rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const portfolioSectionStyle = {
    width: '100%',
    maxWidth: '1080px',
    marginBottom: '3rem',
  };

  const videoCarouselStyle = {
    display: 'flex',
    overflowX: 'hidden',
    scrollSnapType: 'x mandatory',
    WebkitOverflowScrolling: 'touch',
    marginBottom: '1rem', // Adjust spacing between sections
    position: 'relative', // Ensure relative positioning for absolute buttons
  };

  const videoPlayerStyle = {
    flex: '0 0 auto',
    marginRight: '10px', // Adjust spacing between videos
    scrollSnapAlign: 'start',
  };

  const buttonContainerStyle = {
    position: 'absolute',
    top: '34%',
    transform: 'translateY(-50%)',
    width: '100%',
    maxWidth: '1280px',
    display: 'flex',
    justifyContent: 'space-between',
    pointerEvents: 'none', // Ensure buttons don't block scroll
  };

  const buttonStyle = {
    padding: '10px',
    margin: '0 5px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    pointerEvents: 'auto', // Enable pointer events for buttons
  };

  return (
    <div style={portfolioContainerStyle} className="portfolio-container">
      <div style={portfolioSectionStyle} className="portfolio-section">
      <h1 className={styles.title_secondary}>{t('cinematic')}</h1>
      <p className={styles.text}>{t('cinematic_description')}</p>
        <div
          style={videoCarouselStyle}
          ref={carouselRef}
          className="video-carousel"
        >
          {videoIds.map((videoId) => (
            <div
              key={videoId}
              style={videoPlayerStyle}
              className="video-player"
            >
              <YoutubePlayer videoId={videoId} />
            </div>
          ))}
        </div>
      </div>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle} onClick={() => scrollTo(-200)}>
          <FaChevronLeft />
        </button>
        <button style={buttonStyle} onClick={() => scrollTo(200)}>
          <FaChevronRight />
        </button>
      </div>
      <div style={portfolioSectionStyle} className="portfolio-section">
         <h1 className={styles.title_secondary}>{t('fpv')}</h1>
    <p className={styles.text}>{t('fpv_porfolio_description')}</p> 
      </div>
    </div>
  );
};

export default Portfolio;
