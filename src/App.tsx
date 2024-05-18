import './App.css'

import  Home  from './pages/Home';
import DataLoggerLanding from './pages/DataLoggerLanding';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Blog } from './pages/blog/Blog';
import VPDArticle from './pages/blog/vpd/VPD';

function App() {
  return (
    <>
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact-us" element={<Home/>} />
          <Route path="/services/datalogger" element={<DataLoggerLanding />} />
          <Route path="/blog/vpd" element={<VPDArticle/>} />
        </Routes>
      </>
    </Router>
    </>
  )
}

export default App
