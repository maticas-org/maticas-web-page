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