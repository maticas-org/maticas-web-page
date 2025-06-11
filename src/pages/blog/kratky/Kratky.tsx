import Table from 'react-bootstrap/Table';
import { Separator } from "@radix-ui/react-separator";
import { Navbar } from '@/components/navbar';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { WhatsappTelegramFloatingButton } from '@/components/contact-floating-button';
import { Helmet } from 'react-helmet';

function KratkyArticle() {
  return (
    <>
      <Helmet>
        <title>Sistema Kratky | Maticas Tech - Soluciones de Agricultura Inteligente</title>
        <meta name="description" content="Descubre el sistema hidropónico Kratky, una técnica pasiva para cultivar plantas sin necesidad de electricidad, bombas o aireadores. Aprende cómo implementarlo y sus beneficios." />
        <meta name="keywords" content="sistema Kratky, hidroponía pasiva, cultivo sin suelo, cultivo sin electricidad, agricultura urbana, Maticas Tech" />
      </Helmet>

      <div>
        {/* Navbar */}
        <Navbar />
        <WhatsappTelegramFloatingButton />

        {/* Título de la página */}
        <div className="h-6"></div>
        <h1 className="text-3xl font-bold text-center">Sistema Hidropónico Kratky</h1>
        <p className="text-1xl text-center"><em>Una técnica pasiva para cultivar plantas sin necesidad de electricidad...</em></p>
        <p className="text-1xl text-center"><em>O esa era la idea</em></p>
        <div className="h-8"></div>

        {/* Descripción */}
        <h2 className="text-2xl font-bold text-center">¿Qué es el Sistema Kratky? 🤔</h2>
        <div className="h-4"></div>
        <div className="w-4/5 mx-auto">
          <p className="text-1xl">
            El sistema Kratky es una técnica hidropónica pasiva que permite cultivar plantas sin necesidad de electricidad, bombas o aireadores. Fue desarrollado por el investigador Bernard Kratky en la Universidad de Hawái y se basa en el principio de que las raíces de las plantas necesitan oxígeno para crecer. En este sistema, las plantas se colocan en macetas de malla suspendidas sobre una solución nutritiva, permitiendo que las raíces absorban nutrientes y oxígeno del aire a medida que el nivel del agua disminuye.
          </p>
          <div className="h-6"></div>
          <img src="/imgs/blog/water-uptake.svg" alt="Sistema Kratky" className="w-4/5 mx-auto" />
          <div className="h-6"></div>
        </div>

        {/* Beneficios del Sistema Kratky */}
        <div className="h-6"></div>
        <h2 className="text-2xl font-bold text-center">Beneficios del Sistema Kratky 🌱</h2>
        <div className="h-4"></div>
        <div className="w-4/5 mx-auto">
          <ul className="list-disc pl-5 text-1xl">
            <li>Fácil de implementar y mantener</li>
            <li>No requiere electricidad ni bombas</li>
            <li>Ideal para espacios pequeños y urbanos</li>
            <li>Consumo eficiente de agua y nutrientes</li>
            <li>Apto para cultivos de hojas verdes como lechuga, espinaca y albahaca</li>
          </ul>
        </div>

        {/* Cómo Implementar el Sistema Kratky */}
        <div className="h-6"></div>
        <h2 className="text-2xl font-bold text-center">¿Cómo Implementar el Sistema Kratky? 🛠️</h2>
        <div className="h-4"></div>
        <div className="w-4/5 mx-auto">
          <p className="text-1xl">
            Para implementar el sistema Kratky, sigue estos pasos:
          </p>
          <ul className="list-decimal pl-5 text-1xl">
            <li>Selecciona un recipiente opaco para evitar el crecimiento de algas.</li>
            <li>Coloca una tapa con agujeros para insertar las macetas de malla.</li>
            <li>Llena el recipiente con una solución nutritiva adecuada para el cultivo elegido.</li>
            <li>Suspende las macetas de malla sobre la solución, asegurando que las raíces estén parcialmente sumergidas.</li>
            <li>Coloca el sistema en un lugar con buena iluminación, preferiblemente con luz natural o luces LED de espectro completo.</li>
          </ul>
        </div>

        {/* Tabla de Comparación */}
        <div className="h-6"></div>
        <h2 className="text-2xl font-bold text-center">Comparación del Sistema Kratky con Otros Sistemas Hidropónicos</h2>
        <div className="h-4"></div>
        <div className="w-4/5 mx-auto">
          <Table responsive="sm">
            <thead>
              <tr>
                <th>Sistema</th>
                <th>Requiere Electricidad</th>
                <th>Requiere Bombas</th>
                <th>Requiere Aireadores</th>
                <th>Ideal para Espacios Pequeños</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kratky</td>
                <td>No</td>
                <td>No</td>
                <td>No</td>
                <td>Sí</td>
              </tr>
              <tr>
                <td>Deep Water Culture (DWC)</td>
                <td>Sí</td>
                <td>Sí</td>
                <td>Sí</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Flood and Drain (Ebb and Flow)</td>
                <td>Sí</td>
                <td>Sí</td>
                <td>Sí</td>
                <td>No</td>
              </tr>
            </tbody>
          </Table>
        </div>

        {/* El twist de Maticas Tech al sistema de cultivo */}
        <div className="h-6"></div>
        <h2 className="text-2xl font-bold text-center">¿Y qué le hicimos nosotros? 🛠️</h2>
        <div className="h-4"></div>
        <div className="w-4/5 mx-auto">
          <p className="text-1xl">
            Para implementar el sistema Kratky, decidimos darle un pequeño giro. <b><em>Las micorrizas</em></b>, Las micorrizas son asociaciones simbióticas entre hongos y las raíces de las plantas, fundamentales para su nutrición y salud. Esta relación beneficia tanto al hongo como a la planta: el hongo obtiene azúcares y compuestos orgánicos de la planta, mientras que la planta recibe nutrientes minerales y agua del hongo.
          </p>
          <div className="h-3"></div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/17/Micorriza_Colonizacion.png"
            alt="Visualización de micorrizas"
            className="w-2/5 mx-auto"
            style={{ maxWidth: '30%' }}
          />
          <p className="text-center text-sm text-gray-400 mt-2">
            Visualización microscópica de micorrizas colonizando raíces de plantas. Fuente: Wikimedia Commons.
          </p>
          <div className="h-3"></div>


          <p className="text-1xl">
            Sin embargo, las micorrizas no pueden sobrevivir en un medio acuoso sin oxigenación en el agua. Por lo tanto, para que las micorrizas puedan prosperar en el sistema Kratky, es necesario implementar un sistema de oxigenación.
            Esto se puede lograr mediante el uso de bombas de aire o aireadores que introduzcan oxígeno en la solución nutritiva, permitiendo que las micorrizas se desarrollen y beneficien a las plantas.
          </p>
          <div className="h-3"></div>
          <img
            src="/imgs/blog/kratky-electronics-view.jpg"
            alt="Electrónica del Sistema Kratky"
            className="w-4/5 mx-auto"
            style={{ maxWidth: '70%' }}
           />
          <p className="text-center text-sm text-gray-400 mt-2">
            Vista de la electrónica del sistema Kratky con oxigenación, el dispositivo tiene capacidad de controlar 3 actuadores.
            Fuente: Maticas Tech.
          </p>
        </div>

        {/* Llamado a la acción */}
        <div className="h-12"></div>
        <blockquote
          className="text-2xl text-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '10px' }}
        >
          <p><strong>"</strong><em>El sistema Kratky es una forma sencilla y eficiente de cultivar tus propias plantas sin complicaciones.</em><strong>"</strong></p>
        </blockquote>

        {/* Footer */}
        <div className="h-12"></div>
        <footer className="text-1xl text-center">
          <p>📚 Referencias:</p>
          <ul className="list-disc pl-5 text-1xl">
            <li>Bernard A. Kratky. "Three Non-Circulating Hydroponic Methods for Growing Lettuce". Acta Horticulturae, 2009.</li>
            <li>Wikipedia contributors. "Kratky method". Wikipedia, 2025. <a href="https://en.wikipedia.org/wiki/Kratky_method">Link al artículo.</a></li>
            <li>NoSoilSolutions. "The Kratky Method of Hydroponic Gardening". <a href="https://nosoilsolutions.com/kratky-method-hydroponic-gardening/">Link al artículo.</a></li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default KratkyArticle;