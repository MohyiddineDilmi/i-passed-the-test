import React from 'react';
import AppBar from '../../components/AppBar';
import HeaderSection from '../../components/HeaderSection';
import './home.css';
import Footer from '../../components/Footer';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from 'framer-motion';
import { useEffect, useMemo } from 'react';
import SEO from '../../components/SEO';
import { useTranslation } from 'react-i18next';
import Portfolio from './Portfolio';

// const vBg =
//   // 'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/full_bg.mp4';
//   'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/bg_v_1.4.mp4';

function VisualArtsServices() {
  const { t } = useTranslation();

  // const COLORS = ['#AD00FF', '#00FFD1', '#00D1FF', '#FF6F07'];
  const COLORS = useMemo(
    () => ['#AD00FF', '#00FFD1', '#00D1FF', '#FF6F07'],
    []
  );

  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(200% 150% at 0% 10%, #000000 50%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, [color, COLORS]);

  return (
    <>
      <div
        style={{
          backgroundColor: 'black',
        }}
      >
        <SEO
          title="Erelys Drone Services"
          description="Discover Erelys Drone Services for Cinematography, Videography, Aerial Photography, Thermography, Photogrammetry, and Construction Inspections."
          url="https://www.erelys.com/"
          image="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/images/home_image.png"
        />
        <motion.div
          style={{
            background: backgroundImage,
            minHeight: '100vh',
            width: '100%',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <AppBar />
          <HeaderSection
            title={t('visual_arts')}
            description={t('visual_arts_description')}
          />
          <Portfolio />
          <Footer />
        </motion.div>
      </div>
    </>
  );
}

export default VisualArtsServices;
