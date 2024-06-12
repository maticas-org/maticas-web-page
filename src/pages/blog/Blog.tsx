import { Navbar } from '@/components/navbar';
import { OurBlogPosts } from '@/components/existing-blog-posts';
import { OurNextBlogPosts } from '@/components/upcoming-blog-posts';
import { Button } from 'react-bootstrap';
import { WhatsappTelegramFloatingButton } from '@/components/contact-floating-button';
import { Helmet } from 'react-helmet';

export const Blog = () => {
    return (
        <>
        <Helmet>
            <title>Blog | Maticas Tech - Soluciones de Agricultura Inteligente</title>
            <meta name="description" content="Bienvenido al Blog de Maticas Tech, en esta sección puede aprender sobre soluciones de agricultura inteligente utilizando IA, IoT y aprendizaje automático para una gestión eficiente de la agricultura y los datos. También puede encontrar muchas métricas relevantes y estudios de caso." />
            <meta name="keywords" content="agricultura inteligente, déficit de presión de vapor, VPD, integral de luz diurna, DLI, calculadora de integral de luz diurna, calculadora de déficit de presión de vapor, IoT en agricultura, Maticas Tech" />
            
            <meta property='og:title' content='Blog | Maticas Tech - Soluciones de Agricultura Inteligente'/>
            <meta property='og:description' content='Bienvenido al Blog de Maticas Tech, en esta sección puede aprender sobre soluciones de agricultura inteligente utilizando IA, IoT y aprendizaje automático para una gestión eficiente de la agricultura y los datos. También puede encontrar muchas métricas relevantes y estudios de caso.'/>
            <script type="application/ld+json">
            {JSON.stringify({
                "@context": "http://schema.org",
                "@type": "WebPage",
                "name": "Blog",
                "description": "Bienvenido al Blog de Maticas Tech, en esta sección puede aprender sobre soluciones de agricultura inteligente utilizando IA, IoT y aprendizaje automático para una gestión eficiente de la agricultura y los datos. También puede encontrar muchas métricas relevantes y estudios de caso.",
                "url": "http://www.maticas-tech.com/es/blog",
                "inLanguage": "es",
                "breadcrumb": {
                "@type": "BreadcrumbList",
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
        <div>
            <Navbar />
            <OurBlogPosts />
            <div className="h-12"></div>
            <OurNextBlogPosts />
            <div className="h-6"></div>
            <Button variant="primary" href="/es/contactanos"> ¿Algún tema que te gustaría que tratemos? ¡Contáctanos! </Button>
            <WhatsappTelegramFloatingButton />
        </div>
        </>
    )
}