import './App.css';
import Home from './pages/home/Home';
import VisualArtsServices from './pages/services/VisualArtsServices';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/visual-arts">Visual Arts</Link></li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visual-arts" element={<VisualArtsServices />} />
      </Routes>
    </div>
  );
}

export default App;
