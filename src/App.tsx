import './App.css'
import { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import  Home  from './pages/Home';
import DataLoggerLanding from './pages/DataLoggerLanding';
import { Blog } from './pages/blog/Blog';
import VPDArticle from './pages/blog/vpd/VPD';
import DLIArticle from './pages/blog/dli/DLI';
import { ContactUs } from './pages/ContactUs';
import { StillWorkingOnIt } from './pages/StillWorkingOnIt';
import { Helmet } from 'react-helmet';

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
    <Helmet>
      <title>Inicio | Maticas Tech - Soluciones Agrícolas Inteligentes</title>
      <meta name="description" content="Bienvenido a Maticas Tech, su proveedor principal de soluciones agrícolas inteligentes utilizando IA, IoT y aprendizaje automático para una agricultura eficiente y gestión de datos." />
      <meta name="keywords" content="agricultura inteligente, IA en agricultura, aprendizaje automático en agricultura, registrador de datos, visualización de datos, análisis de datos, IoT en agricultura, Maticas Tech" />

      <meta property='og:title' content='Inicio | Maticas Tech - Soluciones Agrícolas Inteligentes'/>
      <meta property='og:description' content='Bienvenido a Maticas Tech, su proveedor principal de soluciones agrícolas inteligentes utilizando IA, IoT y aprendizaje automático para una agricultura eficiente y gestión de datos.'/>
      <meta property="og:image" content="https://www.maticas-tech.com/maticas-tech-logo-color-2.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "WebPage",
          "name": "Inicio",
          "description": "Bienvenido a Maticas Tech, su proveedor principal de soluciones de agricultura inteligente utilizando IA, IoT y aprendizaje automático para una gestión eficiente de la agricultura y los datos.",
          "url": "http://www.maticas-tech.com/es",
          "inLanguage": "es",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": "http://www.maticas-tech.com/es"
              }
            ]
          },
          "author": {
            "@type": "Organization",
            "name": "Maticas Tech",
            "url": "http://www.maticas-tech.com/es"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Maticas Tech",
            "url": "http://www.maticas-tech.com/es"
          },
          "datePublished": "2024-06-11",
          "dateModified": "2024-06-11"
        })}
      </script>
    </Helmet>

    <Suspense fallback={<div>Cargando...</div>}>
    <Router>
        <Routes>
          <Route path="/" element={<RedirectToEs />} />
          <Route path="/es" element={<Home />} />
          <Route path="/es/blog" element={<Blog/>} />
          <Route path="/es/blog/vpd" element={<VPDArticle/>} />
          <Route path="/es/blog/dli" element={<DLIArticle/>} />
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
