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


import { AspectRatio } from "@/components/ui/aspect-ratio"
import { text } from "stream/consumers"
import { AlignJustify } from "lucide-react"

export const MainCarousel = () => {
    return (
        <Carousel className="w-[80%] h-[80%] mx-auto" style={{ height: "80%" }} >
        <CarouselContent>
            <CarouselItem>
                <Card className="rounded-md">
                    <CardHeader>
                    <img src="/src/assets/imgs/growing-kratky-purple-light.png"
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
                <img src="/src/assets/imgs/growing-electronics-and-plants.png" 
                    className="rounded-t-md"
                    alt="Placeholder"
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
            <CarouselItem>

            <Card className="rounded-md"
                  style={{textAlign: "center"}}
            >
                <CardHeader>
                <img src="/src/assets/imgs/kratky-box-and-electronics.png" 
                    className="rounded-t-md"
                    alt="Placeholder"
                    style={{textAlign: "center"}}
                />
                </CardHeader>
                <CardContent>
                <CardTitle>Third slide</CardTitle>
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
    )
}