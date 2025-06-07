import { Navbar } from '@/components/navbar';
import { MainCarousel } from '@/components/main-carousel';
import { OurServices } from '@/components/services';
import { AboutUs } from '@/components/about-us';
import { WhatsappTelegramFloatingButton } from '@/components/contact-floating-button';
import { Helmet } from 'react-helmet';

function Home() {
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
            "url": "https://www.maticas-tech.com/es",
            "inLanguage": "es",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Inicio",
                  "item": "https://www.maticas-tech.com/es"
                }
              ]
            },
            "author": {
              "@type": "Organization",
              "name": "Maticas Tech",
              "url": "https://www.maticas-tech.com/es"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Maticas Tech",
              "url": "https://www.maticas-tech.com/es"
            },
            "datePublished": "2024-06-11",
            "dateModified": "2024-06-11"
          })}
        </script>
      </Helmet>

      <div>
        <Navbar/>
        <div className="h-4"></div>
        <MainCarousel/>
        <OurServices/>
        <AboutUs/>
        <WhatsappTelegramFloatingButton/>
      </div>
    </>
  )
}

export default Home;