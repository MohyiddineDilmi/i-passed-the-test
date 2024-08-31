import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    i18n.changeLanguage(language === 'EN' ? 'en' : 'fr');
  }, [language, i18n]);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'EN' ? 'FR' : 'EN'));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        (event.altKey && event.shiftKey) || // Windows: Alt + Shift
        (event.metaKey && event.shiftKey) // Mac: Command + Shift
      ) {
        toggleLanguage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const languageIcons = {
    EN: 'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/icons/canada_flag.svg',
    FR: 'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/icons/quebec_flag.svg',
  };

  return (
    <div
      onClick={toggleLanguage}
      style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
    >
      <motion.div
        key={language}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={languageIcons[language]}
          alt={`${language} Icon`}
          style={{
            width: '42px',
            height: '42px',
          }}
        />
      </motion.div>
    </div>
  );
};

export default LanguageSwitcher;
