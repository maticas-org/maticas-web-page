import { Helmet } from 'react-helmet';
import { Navbar } from '@/components/navbar';
import { WhatsappTelegramFloatingButton } from '@/components/contact-floating-button';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import InteractiveChart from './InteractiveDLIChart';


function DLIArticle() {
  return (
    <>
      <Helmet>
        <title>Blog DLI | Maticas Tech - Soluciones de Agricultura Inteligente</title>
        <meta name="description" content="Qué es el Day Light Integral (DLI), su importancia, cómo calcularlo y cómo tomar mejores decisiones en la agricultura basándose en esta variable." />
        <meta name="keywords" content="DLI, Day Light Integral, Integral de Luz Diaria, agricultura, cultivo, invernadero, fotosíntesis, PAR, Maticas Tech" />
        <meta property='og:title' content='Blog DLI | Maticas Tech - Soluciones de Agricultura Inteligente'/>
        <meta property='og:description' content='Qué es el Day Light Integral (DLI), su importancia, cómo calcularlo y cómo tomar mejores decisiones en la agricultura basándose en esta variable.'/>
        <meta property="og:image" content="https://www.maticas-tech.com/maticas-tech-logo-color-2.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebPage",
            "name": "Blog DLI",
            "description": "Qué es el Day Light Integral (DLI), su importancia, cómo calcularlo y cómo tomar mejores decisiones en la agricultura basándose en esta variable.",
            "url": "https://www.maticas-tech.com/es/blog/dli",
            "inLanguage": "es",
            "breadcrumb": {
              "@type": "BreadcrumbList",
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
            "datePublished": "2024-06-20",
            "dateModified": "2024-06-20"
          })}
        </script>
      </Helmet>

      <div>
        {/* Nav bar */}
        <Navbar/>
        <WhatsappTelegramFloatingButton/>

        {/* Page Title */}
        <div className="h-6"></div>
        <h1 className="text-3xl font-bold text-center">Entendiendo el Day Light Integral (DLI)</h1>
        <p className="text-1xl text-center"><em>Optimiza el crecimiento y la calidad de tus cultivos con el uso adecuado del DLI.</em></p>
        <div className="h-8"></div>

        {/* Explicación del PAR */}

        <div className="h-10"></div>
        <h2 className="text-2xl font-bold text-center">Explicación del PAR ☀</h2>
        <h3 className="text-1xl text-center"><em>(Photosintetic active radiation - radiación fotosintéticamente activa)️</em></h3>
        <div className="h-4"></div>
        <div className="w-4/5 mx-auto">

          <p className="text-1xl">
            El PAR (Radiación Fotosintéticamente Activa) se refiere al rango de luz que las plantas pueden utilizar para la fotosíntesis, comprendiendo longitudes de onda de 400 a 700 nanómetros. La cantidad de PAR que recibe una planta es crucial para su capacidad de fotosintetizar y, por lo tanto, para su crecimiento y desarrollo.
          </p>
          <div className="h-4"></div>
          <p className="text-1xl">
            En palabras más simples el PAR es la luz que las plantas pueden "ver" y utilizar para producir energía. 
          </p>
          {/* Imagen del espectro de luz visible */}
          <div className="h-2"></div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Wavelength_Overview.svg" alt="Espectro de luz PAR" className="w-4/5 mx-auto" />
          <p className="text-1xl">
          <div className="h-2"></div>

          {/* Descripción de la imagen */}
          <em>
            En esta gráfica podemos ver lo que corresponde al espectro de luz visible para el ojo humano, tengamos como referencia que la luz PAR se encuentra en el rango de 400 a 700 nm.
            <div className="h-2"></div>
            De hecho el espectro PAR puede variar dependiendo de la planta, pero en general se considera que la luz azul (400-500 nm) es la más importante para el crecimiento vegetal y la luz roja (600-700 nm) es la más importante para la floración y la fructificación.
          </em>
          </p>

        </div>
        <div className="h-10"></div>

        {/* Cómo medir el PAR */}
        <h2 className="text-2xl font-bold text-center">¿Cómo puedo medir el PAR? 📏</h2>
        <div className="h-4"></div>
        <div className="w-4/5 mx-auto">
          <p className="text-1xl">
            La intensidad de la luz PAR se mide en micromoles de fotones por metro cuadrado por segundo (µmol·m⁻²·s⁻¹), o PPFD (Photon Flux Density en inglés). Para medir el PAR, se utilizan sensores de luz especializados llamados sensores de PAR o sensores de PPFD.
          </p>
          <div className="h-4"></div>
          <p className="text-1xl">
            Estos sensores miden la cantidad de fotones de luz que inciden en un metro cuadrado de superficie por segundo, proporcionando una lectura precisa de la intensidad de la luz PAR en un entorno de cultivo.
          </p>
          <div className="h-4"></div>
          <p className="text-1xl">
            El problema que se presenta es que estos sensores son costosos 💸💸💸 y no necesariamente accesibles para todos los productores. En el <a className="text-blue-500" href="/es/blog/par" target="_blank" rel="noreferrer">siguiente artículo</a> te enseñamos cómo puedes calcular el PAR con un sensor de luz común, disponible en tu teléfono móvil.
          </p>
        </div>
        <div className="h-10"></div>



        <h2 className="text-2xl font-bold text-center">¿Qué es el DLI? 🤔</h2>
        <div className="h-4"></div>
        <div className="w-4/5 mx-auto">
          <p className="text-1xl">
            El DLI, o "Integral de Luz Diaria" (Day Light Integral en inglés), es una medida de la cantidad total de radiación fotosintéticamente activa (PAR) que recibe una planta o alga cada día. 
          </p>
          <div className="h-4"></div>
          <p className="text-1xl">
            El DLI se expresa en moles de luz por metro cuadrado por día (mol·m⁻²·d⁻¹), cuantificando el total de fotones de luz que inciden en un metro cuadrado de superficie en un periodo de 24 horas.
          </p>
        </div>
        
        <div className="h-10"></div>
        <h3 className="text-2xl font-bold text-center">¿Para qué sirve el DLI? 🌱</h3>
        <div className="h-4"></div>
        <div className="w-4/5 mx-auto">
          <p className="text-1xl">El DLI es crucial en la producción agrícola y hortícola. Conocer y gestionar el DLI permite a los cultivadores tomar decisiones informadas sobre el manejo de la luz en sus cultivos. Aquí hay tres ejemplos:</p>
          <div className="h-4"></div>
          <ul className="list-disc pl-5 text-1xl">
            <li><strong>Optimización del uso de luz suplementaria:</strong> En invernaderos en latitudes norteñas con luz natural limitada en invierno, el DLI puede indicar cuándo y cuánto usar iluminación suplementaria para asegurar un crecimiento óptimo de las plantas.</li>
            <div className="h-4"></div>
            <li><strong>Control del fotoperiodo y calidad de las plantas:</strong> Ajustando la duración y la intensidad de la luz, los productores pueden mejorar características de las plantas como el número de flores y el grosor del tallo.</li>
            <div className="h-4"></div>
            <li><strong>Gestión del estrés y salud de los cultivos:</strong> El monitoreo del DLI ayuda a reducir el estrés de las plantas y optimizar la fotosíntesis, manteniendo la salud general de los cultivos.</li>
          </ul>
        </div>
        
        <div className="h-10"></div>
        <h3 className="text-2xl font-bold text-center">¿Cómo se calcula el DLI? 🧮</h3>
        <div className="h-4"></div>
        <div className="w-4/5 mx-auto">
          <p className="text-1xl">El cálculo del DLI se basa en la medición de la intensidad lumínica instantánea (flujo de fotones fotosintéticos o PPFD) y la duración de la luz a lo largo del día. La fórmula básica para calcular el DLI es:</p>
          <div className="text-center my-4 p-4 bg-gray-100 border rounded">
            <code>DLI (mol m<sup>-2</sup> d<sup>-1</sup>) = PPFD (µmol m<sup>-2</sup> s<sup>-1</sup>) × fotoperiodo (s) × 0.000001</code>
          </div>
          <p className="text-1xl">El factor 0.000001 se utiliza para convertir los micromoles por segundo en moles por día.</p>
        </div>

        <div className="h-10"></div>
        <h3 className="text-2xl font-bold text-center">Calculadora de DLI 🌞</h3>
        <div className="h-4"></div>
        <p className="text-1xl text-center">Ingresa tus mediciones de PAR (µmol·m⁻²·s⁻¹) a lo largo del día para calcular el DLI.</p> 
        <p className="text-1xl text-center">Puedes clicar cada punto de la gráfica y luego introducir el valor medido, o tus proyecciones.</p>
        <div className="h-4"></div>
        <InteractiveChart/>
        <div className="h-4"></div>


        
        <div className="h-16"></div>
        <blockquote className="text-2xl text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '10px' }}>
          <p><strong>"</strong><em>El uso adecuado del DLI puede llevar a cultivos más saludables y eficientes.<strong>"</strong></em></p>
        </blockquote>

        <div className="h-16"></div>
        <h3 className="text-2xl font-bold text-center">¿Hay algo más que te gustaría saber sobre el DLI? 🌿</h3>
        <div className="h-4"></div>
        <p className="text-1xl text-center">¡Déjanos tus comentarios y sugerencias! 🌱</p>
        <div className="h-4"></div>
        <Link to="/es/contactanos">
          <Button className="w-1/2 mx-auto">Contáctanos, es gratis 😉</Button>
        </Link>
        <div className="h-16"></div>

        {/* Footer - References */}
        <h3 className="text-2xl font-bold text-center">Esto es real y ellos lo respaldan 📚</h3>
        <div className="h-4"></div>
        <footer className="text-1xl text-center">
          <ul className="list-disc pl-5 text-1xl">
            <li><a href = "https://www.extension.purdue.edu/extmedia/ho/ho-238-w.pdf" target="_blank" rel="noreferrer">Purdue University. Measuring Daily Light Integral in a Greenhouse.</a></li>
            <li><a href = "https://www.specmeters.com/assets/1/7/A051.pdf" target="_blank" rel="noreferrer">James E. Faust, Light Management in Greenhouses, Daily Light Integral: A useful tool for the U.S. Floriculture industry.</a></li>
            <li><a href = "https://www.horti-growlight.com/es-es/par-ppf-ypf-ppfd-y-dli" target="_blank" rel="noreferrer">HortiGrowLight. PAR, PPF, YPF, PPFD y DLI.</a></li>
            <li><a href = "https://www.horti-growlight.com/es-es/valores-tipicos-de-ppfd-y-dli-por-cultivo" target="_blank" rel="noreferrer">HortiGrowLight. Valores típicos de PPFD y DLI por cultivo.</a></li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default DLIArticle;
