import React, { useEffect, useState } from 'react';
import styles from '../../modules/styles.module.css';
import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';
import { height } from '@mui/system';

const headerStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '8rem',
  },
  animatedText: {
    maxWidth: '1080px',
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

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(i18n.language);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return (
    <header style={headerStyles.container}>
      <div style={headerStyles.animatedText}>
        <h1 className={`${styles.title_primary_simple} responsive-title`}>
          <TypeAnimation
            key={language} // Force re-render on language change
            sequence={[
              t('header_title_one'),
              1000,
              t('header_title_two'),
              1000,
              t('header_title_three'),
              1000,
              t('header_title_four'),
              1000,
            ]}
            speed={50}
            cursor={true}
            style={{
              fontFamily: 'NCTTorin-ExtraBold',
              textAlign: 'center',
              color: '#b78143',
              backgroundImage:
                '-webkit-linear-gradient(45deg, #FFFFFF 70%, #fbda61 80%, #ff5acd 100%, #FF6F07 50%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitTextFillColor: 'transparent',
            }}
            repeat={0}
          />
        </h1>
      </div>
    </header>
  );
}

export default Header;
