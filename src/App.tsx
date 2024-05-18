import './App.css'

import  Home  from './pages/Home';
import DataLoggerLanding from './pages/DataLoggerLanding';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import VPDArticle from './pages/vpd/VPD';

function App() {
  return (
    <>
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/datalogger" element={<DataLoggerLanding />} />
          <Route path="/blog/vpd" element={<VPDArticle/>} />
          <Route path="/contact-us" element={<Home/>} />
        </Routes>
      </>
    </Router>
    </>
  )
}

export default App
