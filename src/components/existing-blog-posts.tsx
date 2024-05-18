import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Link } from 'react-router-dom';


export const OurBlogPosts = () => {

    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center">Nuestros artículos ✍️</h2>
            <div className="h-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>

            {/* VPD */}
            <Card className="rounded-md">
                <Link to="/blog/vpd">
                    <CardHeader>
                        <img src="/src/assets/imgs/blog/vpd-article-preview.png"
                            className="rounded-t-md"
                            alt="Placeholder"
                            style={{textAlign: "center"}}
                        />
                    </CardHeader>
                    <CardContent>
                        <CardTitle>Todo lo que necesitas saber de VPD <em>(déficit de presión a vapor)</em></CardTitle>
                        <div className="h-4"></div>
                        <CardDescription>
                            <p>¿Qué es VPD y cómo afecta a tus plantas? ¿Cómo controlarlo? y mucho más. Descúbrelo en este artículo. </p>
                            <p>Además te compartimos 2 herramientas completamente gratuitas para ajustarlo en tu cultivo.</p>
                        </CardDescription>
                    </CardContent>
                </Link>
            </Card>
        </div>
    )
}