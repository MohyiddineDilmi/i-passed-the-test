import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Removed BrowserRouter here
import AppBar from '../../components/AppBar';
import Header from './Header';
import './home.css';
import Services from './Services';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import CanadaTest from '../../canada/App';

function Home() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/canada-test" element={<CanadaTestPage />} />
    </Routes>
  );
}

function HomePage() {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <SEO
        title="I Passed the Test - Your Ultimate Test Preparation Resource"
        description="Prepare effectively for your exams with I Passed the Test. Access comprehensive study materials, practice tests, and expert guidance to ensure your success."
        url="https://www.ipassedthetest.com/"
        image="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/images/home_image.png"
      />
      <AppBar />
      <Header />
      {/* <Services /> */}
      {/* <CanadaTest /> */}

      <Footer />
    </div>
  );
}

function CanadaTestPage() {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <AppBar />
      <CanadaTest />
      <Footer />
    </div>
  );
}

export default Home;
