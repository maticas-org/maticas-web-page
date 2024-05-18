import './App.css'

import  Home  from './pages/Home';
import DataLoggerLanding from './pages/DataLoggerLanding';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import VPDArticle from './pages/VPD';

function App() {
  return (
    <>
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/datalogger" element={<DataLoggerLanding />} />
          <Route path="/vpd" element={<VPDArticle/>} />
        </Routes>
      </>
    </Router>
    </>
  )
}

export default App
