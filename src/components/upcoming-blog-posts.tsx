import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Link } from 'react-router-dom';


export const OurNextBlogPosts = () => {

    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center">Nuestros próximos artículos 🎯️</h2>
            <div className="h-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>

            {/* VPD */}
            <Card className="rounded-md">
                <Link to="/blog">
                    <CardHeader>
                        <img src="/src/assets/imgs/blog/dli-article-preview.png"
                            className="rounded-t-md"
                            alt="Placeholder"
                            style={{textAlign: "center"}}
                        />
                    </CardHeader>
                    <CardContent>
                        <CardTitle>DLI (Daily Light Integral), todo lo que necesitas saber</CardTitle>
                        <div className="h-4"></div>
                        <CardDescription>
                            <p>¿Qué es DLI? ¿Cómo se mide? ¿Cómo afecta a las plantas? ¿Cómo se puede controlar? Todas estas preguntas y más serán respondidas en nuestro próximo artículo.</p>
                            <p>Además te compartiremos una herramienta completamente gratuita para compensarlo en tu cultivo.</p>
                        </CardDescription>
                    </CardContent>
                </Link>
            </Card>
        </div>
    )
}
