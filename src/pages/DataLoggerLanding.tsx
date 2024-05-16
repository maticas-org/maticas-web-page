import { TriangleAlert } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Table from 'react-bootstrap/Table';


function DataLoggerLanding() {
  return (
    <>
        <div>
            
            {/* Alert */}
            <Alert>
            <TriangleAlert className="w-6 h-6" />
            <AlertTitle>¡Quedan pocos cupos disponibles!</AlertTitle>
            <AlertDescription>
                ya quedan sólo <strong>2 de 3</strong> cupos disponibles para unirte a la beta de nuestro servicio de monitoreo inteligente.
            </AlertDescription>
            </Alert>

            {/* Page Title */}
            <div className="h-6"></div>
            <h1 className="text-3xl font-bold text-center">💡Monitoreo Inteligente de Cultivo🌿</h1>
            <p className="text-1xl text-center"><em>Conoce el estado de tus cultivos minuto a minuto y toma decisiones informadas.</em></p>
            <div className="h-6"></div>

            {/* Video Place Holder */}
            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowFullScreen
                    style={{ width: '100%', height: '500px' }}
            />
            <div className="h-6"></div>

            {/* Logos de validación */}
            

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
                    <div><strong>VPD</strong> <em>(Vapour Pressure Deficit)</em></div>
                    <div><strong>DLI</strong> <em>(Day Light Integral)</em></div>
                    <div><strong>DP</strong> <em>(Dew Point)</em></div>
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
            <div className="h-6"></div>
            <blockquote
                className="text-2xl text-center"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '10px' }}
            >
                <p><strong>"</strong><em>Consolidar procesos te lleva a la luna.  Automatizarlos a las estrellas.<strong>"</strong></em></p>
                <footer className="text-1xl text-center">
                    - Maticas Tech
                </footer>
            </blockquote>

            {/* For who is this service */}

            {/* How this product and offer works video */}

            {/* What is the cost of the service? */}

            {/* Summary of the offer */}

            {/* Call to action and redirect to contact us page */}

        </div>
    </>
  )
}

export default DataLoggerLanding;