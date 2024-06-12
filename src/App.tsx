import './App.css'
import { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import  Home  from './pages/Home';
import DataLoggerLanding from './pages/DataLoggerLanding';
import { Blog } from './pages/blog/Blog';
import VPDArticle from './pages/blog/vpd/VPD';
import { ContactUs } from './pages/ContactUs';
import { StillWorkingOnIt } from './pages/StillWorkingOnIt';

const RedirectToEs = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/es', { replace: true });
  }, [navigate]);
  return null;
};

function App() {
  return (
    <>
    <Suspense fallback={<div>Cargando...</div>}>
    <Router>
        <Routes>
          <Route path="/" element={<RedirectToEs />} />
          <Route path="/es" element={<Home />} />
          <Route path="/es/blog" element={<Blog/>} />
          <Route path="/es/blog/vpd" element={<VPDArticle/>} />
          <Route path="/es/contactanos" element={<ContactUs />} />
          <Route path="/es/servicios/registrador-de-datos" element={<DataLoggerLanding />} />
          <Route path="*" element={<StillWorkingOnIt />} />
        </Routes>
    </Router>
    </Suspense>
    </>
  )
}

export default App
