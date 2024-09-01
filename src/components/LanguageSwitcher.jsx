import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    switch (language) {
      case 'EN':
        i18n.changeLanguage('en');
        break;
      case 'FR':
        i18n.changeLanguage('fr');
        break;
      case 'AR':
        i18n.changeLanguage('ar');
        break;
      case 'ES':
        i18n.changeLanguage('es');
        break;
      default:
        i18n.changeLanguage('en');
    }
  }, [language, i18n]);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => {
      switch (prevLanguage) {
        case 'EN':
          return 'FR';
        case 'FR':
          return 'AR';
        case 'AR':
          return 'ES';
        case 'ES':
          return 'EN';
        default:
          return 'EN';
      }
    });
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
    EN: 'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/icons/eng.png',
    FR: 'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/icons/fra.png',
    AR: 'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/icons/ara.png',
    ES: 'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/icons/spa.png',
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
