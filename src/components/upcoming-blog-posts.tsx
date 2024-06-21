import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Link } from 'react-router-dom';


export const OurNextBlogPosts = () => {

    return (
      <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-6">Nuestros próximos artículos 🎯️</h2>
            <div className="h-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* dew point */}
            <Card className="rounded-md shadow-md max-w-xs mx-auto">
                <Link to="/es/blog/dp">
                    <CardHeader>
                        <img src="/imgs/blog/dp-article-preview.png"
                            className="rounded-t-md"
                            alt="dew point article preview - vista previa del artículo de punto de rocío"
                            style={{textAlign: "center"}}
                        />
                    </CardHeader>
                    <CardContent>
                        <CardTitle>DP (Dew Point) - Punto de Rocío, para que sirve y mucho más</CardTitle>
                        <div className="h-4"></div>
                        <CardDescription>
                            <p> ¿Qué es el punto de rocío? ¿Cómo se mide? ¿Cómo afecta a las plantas? ¿Cómo se puede controlar? Todas estas preguntas y más serán respondidas en nuestro próximo artículo. </p>
                            <p><em>Además te compartiremos una herramienta completamente gratuita para calcularlo en tu cultivo.</em></p>
                        </CardDescription>
                    </CardContent>
                </Link>
            </Card>

            {/* PAR */}
            <Card className="rounded-md shadow-md max-w-xs mx-auto">
                <Link to="/es/blog/par">
                    <CardHeader>
                        <img src="/imgs/blog/par-article-preview.png"
                            className="rounded-t-md"
                            alt="PAR article preview - vista previa del artículo de PAR"
                            style={{textAlign: "center"}}
                        />
                    </CardHeader>
                    <CardContent>
                        <CardTitle>PAR (Photosynthetically Active Radiation) - Radiación Fotosintéticamente Activa</CardTitle>
                        <div className="h-4"></div>
                        <CardDescription>
                            <p><em> Herramientas para medir la luz en tu cultivo, cómo afecta a las plantas y cómo puedes controlarla. </em></p>
                            <p> ¿Qué es PAR? ¿Cómo se mide? ¿Cómo afecta a las plantas? ¿Cómo se puede controlar? Todas estas preguntas y más serán respondidas en nuestro próximo artículo. </p>
                        </CardDescription>
                    </CardContent>
                </Link>
            </Card>
        </div>
        </div>
    )
}
