import './App.css'

import  Home  from './pages/Home';
import DataLoggerLanding from './pages/DataLoggerLanding';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Blog } from './pages/blog/Blog';
import VPDArticle from './pages/blog/vpd/VPD';
import { ContactUs } from './pages/ContactUs';
import { StillWorkingOnIt } from './pages/StillWorkingOnIt';

function App() {
  return (
    <>
    <Router>
      <>
        <Routes>
          <Route path="/es" element={<Home />} />
          <Route path="/es/blog" element={<Blog/>} />
          <Route path="/es/blog/vpd" element={<VPDArticle/>} />
          <Route path="/es/contactanos" element={<ContactUs />} />
          <Route path="/es/servicios/registrador-de-datos" element={<DataLoggerLanding />} />
          <Route path="*" element={<StillWorkingOnIt />} />
        </Routes>
      </>
    </Router>
    </>
  )
}

export default App
