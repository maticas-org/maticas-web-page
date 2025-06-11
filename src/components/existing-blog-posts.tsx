import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  import { Link } from 'react-router-dom';
  
  export const OurBlogPosts = () => {
  
    const articles = [
      {
        id: 1,
        link: "/es/blog/vpd",
        imgSrc: "/imgs/blog/vpd-article-preview.png",
        title: "Todo lo que necesitas saber de VPD (déficit de presión a vapor)",
        description: "¿Qué es VPD y cómo afecta a tus plantas? ¿Cómo controlarlo? y mucho más. Descúbrelo en este artículo. Además te compartimos 2 herramientas completamente gratuitas para ajustarlo en tu cultivo.",
      },
      // Add more articles as needed
      {
        id: 2,
        link: "/es/blog/dli",
        imgSrc: "/imgs/blog/dli-article-preview.png",
        title: "DLI (Daily Light Integral), todo lo que necesitas saber",
        description: "¿Qué es DLI? ¿Cómo se mide? ¿Cómo afecta a las plantas? ¿Cómo se puede controlar? Todas estas preguntas y más serán respondidas en nuestro próximo artículo. Además te compartiremos una herramienta completamente gratuita para compensarlo en tu cultivo.",
      },

      {
        id: 3,
        link: "/es/blog/kratky",
        imgSrc: "/imgs/blog/kratky-article-preview.jpg",
        title: "Sistema Hidropónico Kratky",
        description: "¿Qué es el sistema Kratky? ¿Cómo funciona? ¿Cuáles son sus beneficios? ¿Cómo usar el sistema Kratky opensource ideado por Maticas Tech? Descúbrelo en este artículo.",
      },

      {
        id: 4,
        link: "/es/blog",
        imgSrc: "",
        title: "",
        description: "",
      },
    ]
  
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-6">Nuestros artículos ✍️</h2>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${articles.length < 3 ? 'flex justify-center' : ''}`}>
          {articles.map(article => (
            <Card key={article.id} className="rounded-md shadow-md max-w-xs mx-auto">
              <Link to={article.link}>
                <CardHeader className="p-0">
                    {article.imgSrc ? (
                    <img 
                        src={article.imgSrc}
                        className="rounded-t-md w-full h-48 object-cover"
                        alt="Article preview"
                    />
                    ) : (
                    <div className="rounded-t-md w-full h-48 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500" style={{width: "20vw", height: "100px"}}></span>
                    </div>
                    )}
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg font-semibold">{article.title}</CardTitle>
                  <CardDescription className="text-sm mt-2">
                    <p>{article.description}</p>
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    )
  }
  