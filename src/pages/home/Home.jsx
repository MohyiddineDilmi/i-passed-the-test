import React from 'react';
import AppBar from '../../components/AppBar';
import Header from './Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import StarsCanvas from '../../components/StarsCanvas'; // Import your StarBackground component

function Home() {
  return (
    <div style={{ position: 'relative', backgroundColor: 'black' }}>
      <SEO
        title="I Passed the Test - Your Ultimate Test Preparation Resource"
        description="Prepare effectively for your exams with I Passed the Test. Access comprehensive study materials, practice tests, and expert guidance to ensure your success."
        url="https://www.ipassedthetest.com/"
        image="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/ipassedthetest/seo_image.png"
      />

      {/* Star background animation */}
      <div style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: 1 }}>
        <StarsCanvas />
      </div>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <AppBar />
        <Header />
        <Footer />
      </div>
    </div>
  );
}

export default Home;