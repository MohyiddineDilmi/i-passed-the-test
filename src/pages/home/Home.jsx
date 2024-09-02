import React from 'react';
import AppBar from '../../components/AppBar';
import Header from './Header';
import './home.css';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

function Home() {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <SEO
        title="I Passed the Test - Your Ultimate Test Preparation Resource"
        description="Prepare effectively for your exams with I Passed the Test. Access comprehensive study materials, practice tests, and expert guidance to ensure your success."
        url="https://www.ipassedthetest.com/"
        image="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/ipassedthetest/seo_image.png"
      />
      <AppBar />
      <Header />
      <Footer />
    </div>
  );
}

export default Home;
