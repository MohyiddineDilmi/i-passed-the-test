import React, { useEffect, useState } from 'react';
import styles from '../../modules/styles.module.css';
import { useTranslation } from 'react-i18next';
import canSymbol from '../../assets/canada_symbol.svg';
import mapLeaf from '../../assets/mapple_leaf.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const headerStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', // Ensures the content is centered horizontally
    paddingTop: '8rem',
  },
  animatedText: {
    maxWidth: '1080px',
    textAlign: 'center', // Ensures text and image are centered
  },
  image: {
    display: 'block', // Ensures the image behaves like a block-level element
    margin: '0 auto', // Centers the image horizontally
    padding: '0rem 0rem 1rem 0rem',
  },
  text: {
    maxWidth: '620px',
    margin: '0 auto',
    padding: '1rem',
  },
  mapLeaf: {
    maxWidth: '150px', // Sets the maximum width to 300px
    width: '100%', // Ensures the image scales down proportionally
    margin: '0 auto', // Centers the image horizontally
    display: 'block', // Centers the image in block context
    padding: '1rem',
  },
  startButton: {
    backgroundColor: '#304C70',
    color: '#FFFFFF',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '1rem', // Adds some space above the button
  },

  '@media (max-width: 768px)': {
    container: {
      margin: '0rem',
      paddingTop: '2rem',
    },
  },
};

function Header() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(i18n.language);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const handleStartClick = () => {
    navigate('/canada-test'); // Navigate to the CanadaTest page
  };

  return (
    <header style={headerStyles.container}>
      <div style={headerStyles.animatedText}>
        <img src={canSymbol} alt="Canadian Symbol" style={headerStyles.image} />
        <h1 className={`${styles.title_primary_simple} responsive-title`}>
          {t('header_title')}
        </h1>
        <p className={`${styles.text_dark_mode}`} style={headerStyles.text}>
          {t('header_description')}
        </p>
        <div className="start">
          <button className="btn btn-ui" onClick={handleStartClick}>
            {t('start_button')}
          </button>
        </div>
        <img src={mapLeaf} alt="Canadian Symbol" style={headerStyles.mapLeaf} />
      </div>
    </header>
  );
}

export default Header;
