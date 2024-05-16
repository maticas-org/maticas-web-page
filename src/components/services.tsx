import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Link } from 'react-router-dom';

export const OurServices = () => {

    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center">¿Qué podemos hacer por tí?</h2>
            <div className="h-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                {/* Inteligencia Artificial Agrícola */}
                <Card className="rounded-md">
                    <CardHeader>
                        <img src="/src/assets/imgs/maticas-ai.png"
                            className="rounded-t-md"
                            style={{textAlign: "center"}}
                        />
                    </CardHeader>
                    <CardContent>
                        <CardTitle>Inteligencia Artificial Agrícola</CardTitle>
                        <div className="h-4"></div>
                        <CardDescription>
                            <p>Toma mejores decisiones con la ayuda de la IA y la analítica de datos.</p>
                        </CardDescription>
                    </CardContent>
                </Card>

                {/* Monitoreo inteligente */}
                <Card className="rounded-md">
                <Link to="/datalogger">
                    <CardHeader>
                        <img src="/src/assets/imgs/growing-electronics-and-plants-cropped.png" 
                            className="rounded-t-md"
                            alt="Placeholder"
                            style={{textAlign: "center"}}
                        />
                    </CardHeader>
                    <CardContent>
                        <CardTitle>Monitoreo Inteligente</CardTitle>
                        <div className="h-4"></div>
                        <CardDescription>
                            <p>Conoce el estado de tus cultivos minuto a minutos y toma decisiones informadas.</p>
                        </CardDescription>
                    </CardContent>
                </Link>
                </Card>

                {/* Control con IA */}
                <Card>
                    <CardHeader>
                        <img src="/src/assets/imgs/pcb.png"
                            className="rounded-t-md"
                            style={{textAlign: "center"}}
                        />
                    </CardHeader>
                    <CardContent>
                        <CardTitle>Control con Inteligencia Artificial</CardTitle>
                        <div className="h-4"></div>
                        <CardDescription>
                            <p>Servicio de manejo de condiciones ambientales para tus cultivos. ¿Riego? ¿Luz? ¿Ventilación? ¡Nosotros lo controlamos por ti!</p>
                        </CardDescription>
                    </CardContent>
                </Card>

                {/* Personalized services */}
                <Card>
                    <CardHeader>
                        <img src="/src/assets/imgs/funny-creator-and-kratky.png"
                            className="rounded-t-md"
                            style={{textAlign: "center"}}
                        />
                    </CardHeader>
                    <CardContent>
                        <CardTitle>¿Algo fuera del menú?</CardTitle>
                        <div className="h-4"></div>
                        <CardDescription>
                            <p>Si tienes una necesidad específica, ¡contáctanos! Estamos seguros de que podemos ayudarte,
                               Tenemos un equipo de expertos en diversas áreas de la tecnología y la agricultura.</p>  
                        </CardDescription>
                    </CardContent>
                </Card>
            </div>
            <div className="h-8"></div>
        </div>
    )
}

export default OurServices;