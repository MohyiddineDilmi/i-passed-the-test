import React from 'react';
import styles from '../modules/styles.module.css';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const headerStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '1rem',
    paddingTop: '4rem',
  },
  animatedText: {
    display: 'inline',
  },
  '@media (max-width: 768px)': {
    container: {
      margin: '0rem',
    },
  },
};

const NeonTitle = styled(motion.h1)`
  color: #fff;
  transition:
    color 0s ease-out,
    text-shadow 1.2s ease-out;

  &:hover {
    color: #121212;
    text-shadow:
      0 0 5px #00e6e6,
      0 0 10px #00e6e6,
      0 0 80px #00e6e6,
      0 0 160px #00e6e6;
  }
`;

function HeaderSection({ title, description }) {
  return (
    <header style={headerStyles.container}>
      <div style={headerStyles.animatedText}>
        <NeonTitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={`${styles.title_primary_simple} responsive-title`}
        >
          {title}
        </NeonTitle>

        <p className={`${styles.text_white}`}>{description}</p>
      </div>
    </header>
  );
}

export default HeaderSection;
