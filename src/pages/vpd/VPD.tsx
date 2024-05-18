import { TriangleAlert } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Table from 'react-bootstrap/Table';
import { Separator } from "@radix-ui/react-separator";
import { Navbar } from '../../components/navbar';
import  VPDChart  from './VPDChart';
import VPDSolver from "./VPDSolver";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

function VPDArticle() {
  return (
    <>
        <div>
            
            {/* Nav bar */}
            <Navbar/>

            {/* Page Title */}
            <div className="h-6"></div>
            <h1 className="text-3xl font-bold text-center"> Manejo del Déficit de Presión de Vapor (VPD) </h1>
            <p className="text-1xl text-center"><em>Optimiza el crecimiento y la calidad de tus cultivos con un adecuado control del VPD.</em></p>
            <div className="h-8"></div>

            {/* Description */}
            <h2 className="text-2xl font-bold text-center">¿Y qué es el VPD? 🤔</h2>
            <div className="h-4"></div>
            <div className="w-4/5 mx-auto">

                <p className="text-1xl">
                    El déficit de presión de vapor, o VPD, es la diferencia (déficit) entre la cantidad de humedad en el aire y la cantidad de humedad que el aire puede contener cuando está saturado.
                    Una vez que el aire se satura, el agua se condensará para formar nubes, rocío o películas de agua sobre las hojas.
                </p>
                <div className="h-6"></div>
                <img src="/src/assets/imgs/blog/vpd-formula.png" alt="Plants" className="w-4/5 mx-auto"/>
                <div className="h-6"></div>
                <p className="text-1xl">
                    VPD, a diferencia de RH (Humedad Relativa), se correlaciona con las tasas de transpiración de las plantas, que influye 
                    en la captación de CO₂ y la eficiencia fotosintética, <em>es decir mayor crecimiento y producción.</em>
                </p>
                <div className="h-10"></div>

                <h3 className="text-2xl font-bold text-center">¿Cómo afecta el déficit de presión de vapor a las plantas? 💧</h3>
                <div className="h-4"></div>

                <p className="text-1xl">
                    Las hojas vivas tienen un contenido de agua del 100% HR, lo que significa que están completamente saturadas. El aire, por otro lado, suele estar por debajo de la saturación, lo que causa que las plantas transpiren.
                </p>
                <img src="/src/assets/imgs/blog/high-vs-low-vpd.svg" alt="Plants" className="w-1/2 mx-auto"/>
                <div className="h-4"></div>
                {/* 2 columns for low and high VPD */}

                <div className="w-4/5 mx-auto">
                    <div className="flex flex-row justify-between">
                        <div className="w-1/2">
                            <h4 className="text-2xl font-bold text-center">VPD Bajo</h4>
                            <p className="text-1xl">
                                Implica una baja transpiración, ralentizaría el metabolismo de la planta, inhibiendo su desarrollo y aumentando su susceptibilidad a enfermedades.
                            </p>
                        </div>
                        <Separator orientation='vertical' className= 'bg-gray-200 w-1' style = {{height: '100'}} />
                        <div className="w-1/2">
                            <h4 className="text-2xl font-bold text-center">VPD Alto</h4>
                            <p className="text-1xl">
                            Cuando el VPD es alto, es decir, cuando el aire está relativamente seco, las tasas de transpiración aumentan.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="h-4"></div>
                <p className="text-1xl">
                 A medida que el VPD disminuye, la transpiración también disminuye, e incluso puede detenerse por completo.
                </p>
                <div className="h-4"></div>
                <img src="/src/assets/imgs/blog/water-uptake.svg" alt="Plants" className="w-1/2 mx-auto"/>
                <div className="h-4"></div>

                <p className="text-1xl">
                    Hay una relación directa entre el metabolismo de las plantas y la transpiración. Cuando el agua se evapora de las hojas, "tira" agua a través de las raíces, lo cual es esencial para el crecimiento, desarrollo y fructificación de las plantas, ya que esta agua contiene nutrientes.
                    Podríamos pensar en las plantas como bombas de agua que absorben nutrientes del suelo y los transportan a través de sus tejidos, su "electricidad" es este diferencial de presión de vapor.
                </p>
                <div className="h-4"></div>

                <p className="text-1xl">
                    Sin embargo, un VPD alto también puede ser problemático. Un aire más seco puede hacer que la tasa de evaporación de los estomas sea demasiado rápida, provocando que las hojas se sequen.
                </p>
                <p className="text-1xl">
                    Un VPD muy alto puede causar estrés hídrico en las plantas, lo que las lleva a cerrar sus estomas para retener agua. Esto también impide la entrada de CO₂, lo que detiene el crecimiento de la planta.
                </p>
                <div className="h-10"></div>
            </div>

            {/* Benefits of controlling VPD */}
            <div className="h-6"></div>
            <h2 className="text-2xl font-bold text-center">Beneficios de un buen control del VPD 🌱</h2>
            <div className="h-4"></div>
            <div className="w-4/5 mx-auto">
                <ul className="list-disc pl-5 text-1xl">
                    <li>Mejora del crecimiento de las plantas</li>
                    <li>Incremento de la eficiencia en el uso del agua</li>
                    <li>Mejora en la calidad de los frutos y verduras</li>
                </ul>
            </div>

            {/* Consequences of not controlling VPD */}
            <div className="h-6"></div>
            <h2 className="text-2xl font-bold text-center">Consecuencias de no controlar el VPD adecuadamente 🚫</h2>
            <div className="h-4"></div>
            <div className="w-4/5 mx-auto">
                <ul className="list-disc pl-5 text-1xl">
                    <li>Estrés por deshidratación en las plantas</li>
                    <li>Disminución de la eficiencia fotosintética</li>
                    <li>Problemas de calidad en los productos cultivados</li>
                </ul>
            </div>

            {/* How to control VPD */}
            <div className="h-6"></div>
            <h2 className="text-2xl font-bold text-center">¿Cómo usar y controlar el VPD? 🌡️</h2>
            <div className="h-4"></div>
            <div className="w-4/5 mx-auto">
                <p className="text-1xl">
                    Para manejar eficazmente el VPD en tu invernadero, considera las siguientes estrategias:
                </p>
                <ul className="list-disc pl-5 text-1xl">
                    <li>Monitoreo constante con sensores de temperatura y humedad</li>
                    <li>Uso de sistemas de humidificación y deshumidificación</li>
                    <li>Ventilación y sombreado adecuados</li>
                    <li>Automatización para ajustes precisos y continuos</li>
                </ul>
            </div>

            {/* Summary Table */}
            <div className="h-6"></div>
            <h2 className="text-2xl font-bold text-center">Resumen de Beneficios</h2>
            <div className="h-4"></div>
            <div className="w-4/5 mx-auto">
                <Table responsive="sm">
                    <thead>
                    <tr>
                        <th>🌟 Beneficios</th>
                        <th>🌟 Consecuencias Positivas</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <div className="">Mejora del crecimiento</div>
                            <div className="">Mayor eficiencia en uso de agua</div>
                            <div className="">Mejor calidad de productos</div>
                        </td>
                        <td>
                            <div>Aumento en la producción</div>
                            <div>Reducción de costos de agua</div>
                            <div>Productos más saludables</div>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>

            {/* Call to action */}
            <div className="h-12"></div>
            <blockquote
                className="text-2xl text-center"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '10px' }}
            >
                <p><strong>"</strong><em>Un buen manejo del VPD lleva a invernaderos más eficientes y cultivos más saludables.<strong>"</strong></em></p>
            </blockquote>
        
            {/* VPD Chart */}
            <div className="h-12"></div>
            <h2 className="text-2xl font-bold text-center">Visualización del VPD</h2>
            <div className="h-4"></div>
            <p className="text-1xl text-center">La siguiente gráfica muestra la variación del VPD en función de la temperatura y la humedad relativa.</p>
            <p className="text-1xl text-center">Puedes ajustar los valores de temperatura y humedad para ver cómo cambia el VPD. Así como los rangos óptimos para diferentes etapas de crecimiento.</p>
            <p className="text-1xl text-center">¡Juega con los valores y observa cómo afecta el VPD! Desarrollamos este recurso para tí 🌱, de modo que lo puedas consultar siempre que te haga falta.</p>
            <div className="h-4"></div>
            <VPDChart/>
        
            <p className="text-1xl text-center">👆 Esperamos que esta gráfica te haya ayudado a tener una idea más clara del comportamiento del VPD.</p>
            <p className="text-1xl text-center">Para finalizar, miremos el ejemplo de <strong>1.06</strong> kPa de VPD en la gráfica (cuando la temperatura es de <strong>20°C</strong> y la humedad relativa es de <strong>60%</strong>).</p>
            <p className="text-1xl text-center">Quiero que notes cómo podríamos pasar a estimular el estadío de flor tardía si aumentamos la temperatura a <strong>22.5°C</strong>, o también lo podríamos lograr si disminuimos la humedad relativa a <strong>50%</strong>.</p> 
        
            {/* VPD Solver */}
            <div className="h-12"></div>
            <h2 className="text-2xl font-bold text-center">Solucionador de VPD 💻</h2>
            <div className="h-4"></div>
            <p className="text-1xl text-center">¿Quieres saber cómo ajustar la temperatura y la humedad para alcanzar un VPD específico?</p>
            <p className="text-1xl text-center">¡Usa nuestra herramienta para encontrar la solución!</p>
            <div className="h-4"></div>
            <VPDSolver/> 
            <div className="h-16"></div>

            <p className="text-1xl text-center">¿Hay algo más que te gustaría saber sobre el VPD? </p>
            <p className="text-1xl text-center">¿Hay alguna otra herramienta que te gustaría que desarrolláramos para ti?</p>
            <p className="text-1xl text-center">¡Déjanos tus comentarios y sugerencias! 🌱</p>
            <div className="h-4"></div>

            <Link to="/contact-us">
                <Button className="w-1/2 mx-auto">Contáctanos, es gratis 😉 </Button>
            </Link>
            <div className="h-16"></div>

            
        
            {/* Footer - This is not bullshit - references */}
            <div className="h-12"></div>
            <h2 className="text-2xl font-bold text-center"> Esto es real y ellos lo respaldan</h2>
            <div className="h-4"></div>
            
            <footer className="text-1xl text-center">
            <p>📚 Referencias:</p>
            <ul className="list-disc pl-5 text-1xl">
                <li> Amitrano, C., Arena, C., Rouphael, Y., De Pascale, S., & De Micco, V. (2019). Vapour pressure deficit: The hidden driver behind plant morphofunctional traits in controlled environments. Annals of Applied Biology. doi:10.1111/aab.12544</li>
                <li> Wikipedia contributors. (2024, 22 abril). Vapour-pressure deficit. Wikipedia. <a href = "https://en.wikipedia.org/wiki/Vapour-pressure_deficit#:~:text=Vapour%20pressure-deficit%2C%20or%20VPD,films%20of%20water%20over%20leaves">Link al artículo.</a></li>
                <li> DevOps. (2023, 1 enero). ¿Qué es VPD (Déficit de Presión de Vapor)? Drygair Greenhouse Deshumidificadores. <a href = "https://drygair.com/es/blog-es/vpd-vapor-pressure-deficit/">Link al artículo.</a></li>
                <li> Collado, E. (2023, 11 abril). ¿Qué es el VPD o déficit de presión de vapor? Blog de Grow Barato. <a href = "https://www.growbarato.net/blog/vdp/">Link al artículo.</a></li>
            </ul>
            </footer>
        </div>
    </>
  )
}

export default VPDArticle;