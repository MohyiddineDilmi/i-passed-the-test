import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Remove BrowserRouter from here
import Home from './pages/home/Home';
import CanadaTest from './canada/App';
import AppBar from './components/AppBar';
import Footer from './components/Footer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/canada-test" element={<CanadaTestPage />} />
    </Routes>
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

export default App;
