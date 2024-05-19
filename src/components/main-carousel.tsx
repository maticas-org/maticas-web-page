import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const MainCarousel = () => {
    return (
        <div className="w-4/4 mx-auto">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/imgs/growing-kratky-purple-light-cropped.png"
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '0px' }}>
                        <h3><strong><em>Automatización y Agricultura</em></strong></h3>
                        <p>Maticas Tech contribuye al proceso de construir agricultura opensource 
                           para el uso de la gente, creando una disrupción en la forma de hacer agricultura en Colombia y el mundo.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/imgs/caja-electronica-2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '0px' }}>
                        <h3><strong><em>Innovación y mejores resultados</em></strong></h3>
                        <p>Con nuestros servicios y procesos de automatización, te ayudamos a mejorar tus resultados y a ser más eficiente en tu producción.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="h-8"></div>
        </div>
    );
};
