import './App.css';
import Home from './pages/Home';
import Founder from './pages/Founder'
import HSI from './pages/HSI'
import PH116 from './pages/PH116'
import FSI from './pages/FSI'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/hsi" element={<HSI />} />
          <Route path="/ph116" element={<PH116 />} />
          <Route path="/fsi" element={<FSI />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
