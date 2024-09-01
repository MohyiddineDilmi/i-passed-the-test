import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoPath from '../assets/ipassedthetest.svg';
import LanguageSwitcher from './LanguageSwitcher';

const styles = {
  appBar: {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    backgroundColor: 'transparent', // Initial transparent background
    transition: 'background-color 0.3s ease',
  },
  appBarScrolled: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // 50% transparent background on scroll
  },
  appBarContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1080px',
    margin: '0 auto',
    padding: '1rem 2rem', // Added padding for better spacing
  },
  logoImg: {
    height: '2rem',
  },
  responsive: {
    '@media screen and (max-width: 768px)': {
      appBarContainer: {
        flexDirection: 'row',
        alignItems: 'center', // Center the items horizontally
        padding: '1rem 5%',
      },
      logoImg: {
        padding: '0.5rem',
      },
    },
  },
};

function AppBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav style={{ ...styles.appBar, ...(isScrolled && styles.appBarScrolled) }}>
      <div
        style={{
          ...styles.appBarContainer,
          ...styles.responsive['@media screen and (max-width: 768px)']
            .appBarContainer,
        }}
      >
        <div>
          <Link to="/">
            <img src={logoPath} alt="i-passed-the-test-logo" style={styles.logoImg} />
          </Link>
        </div>
        <div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}

export default AppBar;
