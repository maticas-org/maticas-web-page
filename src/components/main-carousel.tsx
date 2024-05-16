import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const MainCarousel = () => {
    return (
        <div className="w-4/4 mx-auto">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/src/assets/imgs/growing-kratky-purple-light-cropped.png"
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '0px' }}>
                        <h3><strong><em>Automation and Agriculture</em></strong></h3>
                        <p>Maticas Tech contributes to the process of building opensource agriculture
                           for people to use, disrupting the way we do agriculture in Colombia and the world.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/src/assets/imgs/caja-electronica-2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '0px' }}>
                        <h3><strong><em>Automation and Agriculture</em></strong></h3>
                        <p>Maticas Tech contributes to the process of building opensource agriculture
                           for people to use, disrupting the way we do agriculture in Colombia and the world.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="h-8"></div>
        </div>
    );
};
