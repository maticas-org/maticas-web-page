import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export const AboutUs = () => {

    return (
        <>
        <h2 className="text-3xl font-bold text-center">¿Quiénes somos?</h2>
        <div className="h-4"></div>

        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h3 className="text-2xl font-bold">Nuestro Propósito</h3>
                    <div className="h-4"></div>
                    <p className="text-justify">
                        Trabajamos para <em><strong>cambiar la forma en que se hace agro en Colombia. </strong></em> 
                        Nuestro propósito es llevar la tecnología a la agricultura, para que todo 
                        cultivador tenga la oportunidad de ganar <em>más dinero, con menos trabajo,
                        recursos y tiempo. </em>
                    </p>

                    <div className="h-4"></div>
                    <p className="text-justify">
                        En esta labor hemos invertido más de 4 años de esfuerzo y 
                        dedicación, para poder ofrecer a nuestros clientes las mejores soluciones.
                    </p>

                    <div className="h-4"></div>
                    <p className="text-justify">
                        Trabajamos para <em><strong>poner a Colombia en el top 3 de los países más
                        productores agrícolas en el mundo. </strong></em> ¡Únete a nosotros!
                    </p>
                    
                </div>
                <div>
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem>
                                <Card className="rounded-md">
                                    <CardHeader>
                                    <img src="maticas-tech-logo-color-2.svg"
                                        className="rounded-t-md"
                                        style={{textAlign: "center"}}
                                    />
                                    </CardHeader>
                                    <CardContent>
                                    <CardTitle>First slide</CardTitle>
                                    <CardDescription>
                                        <p>Some description</p>
                                    </CardDescription>
                                    </CardContent>
                                </Card>
                            </CarouselItem>

                            <CarouselItem>
                            <Card className="rounded-md">
                                <CardHeader>
                                    <img src="maticas-tech-logo.svg"
                                        className="rounded-t-md"
                                        style={{textAlign: "center"}}
                                    />
                                </CardHeader>
                                <CardContent>
                                <CardTitle>Second slide</CardTitle>
                                <CardDescription>
                                    <p>Some description</p>
                                </CardDescription>
                                </CardContent>
                            </Card>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious>Previous</CarouselPrevious>
                        <CarouselNext>Next</CarouselNext>
                    </Carousel>
                </div>
            </div>
        </div>
        </>
    ) 
}
