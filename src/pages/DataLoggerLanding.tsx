import { TriangleAlert } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Table from 'react-bootstrap/Table';
import { Separator } from "@radix-ui/react-separator";
import { WhatsappTelegramFloatingButton } from '@/components/contact-floating-button';
import { Helmet } from 'react-helmet';


function DataLoggerLanding() {
  return (
    <>

        <Helmet>
            <title>Monitoreo Inteligente | Maticas Tech - Soluciones Agrícolas Inteligentes</title>
            <meta name="description" content="Monitorea tu cultivo, humedad, temperatura, déficit de presión a vapor (VPD), integral diaria de luz (DLI) y toma decisiones informadas e inteligentes con nuestra solución, obten mejores resultados automatizados que se traducen en más dinero y mejores cosechas." />
            <meta name="keywords" content="agricultura inteligente, déficit de presión a vapor, integral diaria de luz, VPD, DLI, temperatura, humedad, mejora rendimientos de cultivo, monitoreo de cultivo, IA en agricultura, aprendizaje automático en agricultura, registrador de datos, visualización de datos, análisis de datos, IoT en agricultura, Maticas Tech" />

            <meta property='og:title' content='Monitoreo Inteligente | Maticas Tech - Soluciones Agrícolas Inteligentes'/>
            <meta property='og:description' content='Monitorea tu cultivo, humedad, temperatura, déficit de presión a vapor (VPD), integral diaria de luz (DLI) y toma decisiones informadas e inteligentes con nuestra solución, obten mejores resultados automatizados que se traducen en más dinero y mejores cosechas.'/>
            <script type="application/ld+json">
            {JSON.stringify({
                "@context": "http://schema.org",
                "@type": "WebPage",
                "name": "Blog VPD",
                "description": "Monitorea tu cultivo, humedad, temperatura, déficit de presión a vapor (VPD), integral diaria de luz (DLI) y toma decisiones informadas e inteligentes con nuestra solución, obten mejores resultados automatizados que se traducen en más dinero y mejores cosechas.",
                "url": "http://www.maticas-tech.com/es/servicios/registrador-de-datos",
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
            
            {/* Alert */}
            <Alert>
            <TriangleAlert className="w-6 h-6" />
            <AlertTitle>¡Quedan pocos cupos disponibles!</AlertTitle>
            <AlertDescription>
                ya quedan sólo <strong>2 de 3</strong> cupos disponibles para unirte a la beta de nuestro servicio de monitoreo inteligente.
            </AlertDescription>
            </Alert>
            <WhatsappTelegramFloatingButton />

            {/* Page Title */}
            <div className="h-6"></div>
            <h1 className="text-3xl font-bold text-center">💡Monitoreo Inteligente de Cultivo🌿</h1>
            <p className="text-1xl text-center"><em>Conoce el estado de tus cultivos minuto a minuto y toma decisiones informadas.</em></p>
            <div className="h-6"></div>

            {/* Video Place Holder */}
            <div style={{position: 'relative', paddingBottom: '56.25%', height: 0}}>
                <iframe src="https://player.vimeo.com/video/948103267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                         frameBorder="0"
                         allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                         title="Maticas Tech Monitoreo Inteligente Demo"
                         style = {{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} />
            </div>

            <div className="h-12"></div>

            {/* Description */}
            <h2 className="text-2xl font-bold text-center">¿Qué recibirás? 🎁</h2>
            <div className="h-4"></div>
            <div className="w-4/5 mx-auto">
                <p className="text-1xl">
                    Recibirás <em>un dispositivo de monitoreo de cultivo que se instalará en tu cultivo</em> y te permitirá
                    conocer el <em>estado de tus cultivos minuto a minuto.</em> Podrás acceder a la información desde tu
                    celular, tablet o computador, <em><strong>durante 60 días.</strong></em>
                </p>
            </div>

            {/* Table of extra benefits */}
            <div className="h-6"></div>
            <h2 className="text-2xl font-bold text-center">Beneficios adicionales</h2>
            <div className="h-4"></div>
            <div>

            <Table responsive="sm">
                <thead>
                <tr>
                    <th>✅ Variables ambientales</th>
                    <th>✅ Variables derivadas</th>
                    <th>✅ Soporte de software y hardware</th>
                    <th>✅ Visualizaciones + Análisis</th>
                    <th>✅ Ofertas</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                    <div className=""> 👉🏼 Humeadad Relativa</div>
                    <div className=""> 👉🏼 Temperatura ambiental</div>
                    <div className=""> 👉🏼 Lux</div>
                    </td>
                    <td>
                    <div><a className="text-blue-500" href="/es/blog/vpd" target="_blank"><strong>VPD</strong></a> <em>(Vapour Pressure Deficit)</em></div>
                    <div><a className="text-blue-500" href="https://en.wikipedia.org/wiki/Daily_light_integral" target="_blank"><strong>DLI</strong></a> <em>(Day Light Integral)</em></div>
                    <div><a className="text-blue-500" href="https://es.wikipedia.org/wiki/Punto_de_roc%C3%ADo" target="_blank"><strong>DP</strong></a> <em>(Dew Point)</em></div>
                    </td>
                    <td>
                    <div> 📍Visitas de reparación</div>
                    <div> 📍Visitas de seguimiento</div>
                    <div> 📍Actualizaciones de software y mantenimiento de código</div>
                    <div> 📍Atención a peticiones de features nuevas</div>
                    <div> 📍Acceso a features nuevas a precios exclusivos</div>
                    </td>
                    <td>
                    <div>Promedio, mínimos, máximos y desviación estándar por horas del día</div>
                    <div>Visualizaciones de comportamiento de variables ambientales flexible</div>
                    </td>
                    <td>
                    <div>💸 75% de descuento en el servicio de monitoreo inteligente una vez terminado el periodo</div>
                    <div>💸 15% de descuento en próximo servicio de análisis de imágenes de cultivo</div>
                    <div>💸 20% de descuento en el servicio de predicción de variables</div>
                    </td>
                </tr>
                </tbody>
            </Table>
            </div>

            {/* Call to action as a clickable quote */}
            <div className="h-12"></div>
            <blockquote
                className="text-2xl text-center"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '10px' }}
            >
                <p><strong>"</strong><em>Consolidar procesos te lleva a la luna.  Automatizarlos a las estrellas.<strong>"</strong></em></p>
                <footer className="text-1xl text-center">
                    - Maticas Tech
                </footer>
            </blockquote>
            <div className="h-12"></div>

            {/* For who is this service */}
            <h2 className="text-2xl font-bold text-center">¿Es este servicio para mi? 🤔</h2>
            <div className="h-4"></div>
            <div className="w-4/5 mx-auto">
                <p className="text-1xl">
                    Este servicio es para ti si eres un <strong>productor de cultivos en invernaderos cercano al área metropolitana de bogotá
                    </strong> deseoso de <em>mejorar tu calidad de plantaciones</em> y <em> tomar decisiones informadas </em>
                    a partir de la información que te brinda el monitoreo de variables ambientales.
                </p>
            </div>

            {/* How this product and offer works video */}
            <div className="h-12"></div>
            <div style={{position: 'relative', paddingBottom: '56.25%', height: 0}}>
                <iframe src="https://player.vimeo.com/video/948099520?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                         frameBorder="0"
                         allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                         title="Maticas Tech Monitoreo Inteligente Demo"
                         style = {{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} />
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>

            {/* What is the cost of the service? */}
            <div className="h-12"></div>
            <h2 className="text-2xl font-bold text-center">Una chimba ¿y cúanto vale? 💸</h2>
            <div className="h-4"></div>

            <blockquote
                className="text-2xl text-center"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '10px' }}
            >
                <p><strong>"</strong><em>Nada.<strong>"</strong></em></p>
            </blockquote>
            <div className="h-4"></div>
            <div className="w-4/5 mx-auto">
                <p className="text-1xl">
                    Más allá del costo de instalación <em>(transporte asociado para llegar a la zona de instalación)</em> todo el servicio
                    corre por nuestra cuenta durante los primeros 60 días. <strong>¡Sin compromisos!</strong>
                </p>
                <div className="h-2"></div>
                <p className="text-1xl">
                    Luego de los 60 días, si deseas <strong>continuar</strong> con el servicio, podrás hacerlo <strong>a un costo preferencial,</strong> con la ventaja
                    de que tus nuevas solicitudes y desarrollos serán prioridad para nuestro equipo.
                </p>
            </div>
            <div className="h-20"></div>

            {/* Container with two columns */}
            <div className="w-4/5 mx-auto">
                <div className="flex flex-row justify-between">
                    <div className="w-1/2">
                        <h3 className="text-1xl font-bold text-center">Costo del servicio para los demás clientes ❌</h3>
                        <div className="h-2"></div>
                        <p className="text-1xl text-center"> <strong>$140.000 COP</strong>/<em>sensor al mes</em></p>
                        <p> + <strong>$40.000 COP/mes</strong> por concepto de licenciamiento</p>
                    </div>
                    <Separator orientation='vertical' className= 'bg-gray-200 w-1' style = {{height: '100'}} />
                    <div className="w-1/2">
                        <h3 className="text-1xl font-bold text-center">Costo del servicio en tarifa preferencial para ti ✅</h3>
                        <div className="h-2"></div>
                        <p className="text-1xl text-center"> <strong>$35.000 COP</strong>/<em>sensor al mes</em></p>
                        <p>+ <strong>$40.000 COP/mes</strong> por concepto de licenciamiento</p>
                    </div>
                </div>
            </div>

            {/* Summary of the offer */}

            <div className="h-20"></div>
            <h2 className="text-2xl font-bold text-center">En resumen</h2>
            <div className="h-12"></div>
            <div className="w-4/5 mx-auto">
                <p className="text-1xl">
                    Recibirás un dispositivo de monitoreo de cultivo que se instalará en tu cultivo y te permitirá
                    conocer el estado de tus cultivos minuto a minuto. Podrás acceder a la información desde tu
                    celular, tablet o computador, durante 60 días.
                </p>
                <div className="h-2"></div>
                <Table responsive="sm">
                    <thead>
                    <tr>
                        <th>✅ Variables ambientales</th>
                        <th>✅ Variables derivadas</th>
                        <th>✅ Soporte de software y hardware</th>
                        <th>✅ Visualizaciones + Análisis</th>
                        <th>✅ Ofertas</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                        <div className=""> 👉🏼 Humeadad Relativa</div>
                        <div className=""> 👉🏼 Temperatura ambiental</div>
                        <div className=""> 👉🏼 Lux</div>
                        </td>
                        <td>
                        <div><a className="text-blue-500" href="/es/blog/vpd" target="_blank"><strong>VPD</strong></a> <em>(Vapour Pressure Deficit)</em></div>
                        <div><a className="text-blue-500" href="https://en.wikipedia.org/wiki/Daily_light_integral" target="_blank"><strong>DLI</strong></a> <em>(Day Light Integral)</em></div>
                        <div><a className="text-blue-500" href="https://es.wikipedia.org/wiki/Punto_de_roc%C3%ADo" target="_blank"><strong>DP</strong></a> <em>(Dew Point)</em></div>
                        </td>
                        <td>
                        <div> 📍Visitas de reparación</div>
                        <div> 📍Visitas de seguimiento</div>
                        <div> 📍Actualizaciones de software y mantenimiento de código</div>
                        <div> 📍Atención a peticiones de features nuevas</div>
                        <div> 📍Acceso a features nuevas a precios exclusivos</div>
                        </td>
                        <td>
                        <div>Promedio, mínimos, máximos y desviación estándar por horas del día</div>
                        <div>Visualizaciones de comportamiento de variables ambientales flexible</div>
                        </td>
                        <td>
                        <div>💸 75% de descuento en el servicio de monitoreo inteligente una vez terminado el periodo</div>
                        <div>💸 15% de descuento en próximo servicio de análisis de imágenes de cultivo</div>
                        <div>💸 20% de descuento en el servicio de predicción de variables</div>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
            <div className="h-12"></div>

            {/* Call to action and redirect to contact us page */}
            <blockquote
                className="text-2xl text-center"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '10px' }}
            >
                <p><strong>"</strong><em>Si te parece que es muy bueno para ser verdad, es por que lo es.<strong>"</strong></em></p>
                <div className="h-2"></div>
                <p>Es demasiado bueno para no aprovecharlo. </p>
                <p> y sólo estamos comenzando.</p>
            </blockquote>

            <div className="h-6"></div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <a href="/es/contactanos">Escribirnos es gratis.</a>
            </button>

            {/* Logos de validación */}
            <div className="h-20"></div>
            <Separator orientation='horizontal' className= 'bg-gray-200 w-4/5 mx-auto' style = {{height: '1vh'}} />
            <div className="flex flex-row justify-center">
                <img src="/header.svg" alt="Validación 1" className="w-4/5" style={{maxHeight: '40vh'}}/>
            </div>
            <Separator orientation='horizontal' className= 'bg-gray-200 w-4/5 mx-auto' style = {{height: '1vh'}} />

        </div>
    </>
  )
}

export default DataLoggerLanding;