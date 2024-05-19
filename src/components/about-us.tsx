import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AboutUs = () => {
    return (
        <>
            <h2 className="text-3xl font-bold text-center">¿Quiénes somos?</h2>
            <div className="h-4"></div>

            {/* Carousel */}
            <Carousel interval={3000}>
                <Carousel.Item>
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '40vh' }}>
                        <img
                            src="maticas-tech-logo-color-2.svg"
                            alt="First slide"
                            className="d-block"
                            style={{ maxHeight: '100%', maxWidth: '100%' }}
                        />
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '40vh' }}>
                        <img
                            src="/src/assets/imgs/dave.jpg"
                            alt="Second slide"
                            className="d-block"
                            style={{ maxHeight: '100%', maxWidth: '100%' }}
                        />
                        <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '60vw', padding: '0px' }}>
                            <h3><strong><em>Dave Alsina</em></strong></h3>
                            <p>CEO y Fundador. Profesional en Matemáticas y Computación, desarrollador de inteligencia artificial, backend, frontend y codesarrollador de electrónica y código de hardware.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '40vh' }}>
                        <img
                            src="/src/assets/imgs/danielito.jpg"
                            alt="Third slide"
                            className="d-block"
                            style={{ maxHeight: '100%', maxWidth: '100%' }}
                        />
                        <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '60vw', padding: '0px' }}>
                            <h3><strong><em>Danielito</em></strong></h3>
                            <p>Gran Contribuidor. Profesional en Matemáticas y Computación, desarrollador backend, frontend, contenerización y despliegue de aplicaciones.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '40vh' }}>
                        <img
                            src="/src/assets/imgs/davecito.jpg"
                            alt="Fourth slide"
                            className="d-block"
                            style={{ maxHeight: '100%', maxWidth: '100%' }}
                        />
                        <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '60vw', padding: '0px' }}>
                            <h3><strong><em>Davecito</em></strong></h3>
                            <p>El mismo Dave Alsina pero chistoso.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>

            <div className="h-6"></div>

            {/* Propósito */}
            <div className="w-3/4 mx-auto">
                <h3 className="text-2xl font-bold">Nuestro Propósito</h3>
                <div className="h-4"></div>
                <p className="text-justify">
                    Trabajamos para <em><strong>cambiar la forma en que se hace agro en Colombia. </strong></em>
                    Nuestro propósito es llevar la tecnología a la agricultura, para que todo 
                    cultivador tenga la oportunidad de ganar más dinero, con menos trabajo,
                    recursos y tiempo.
                </p>
                <div className="h-4"></div>
                <p className="text-justify">
                    En esta labor hemos invertido más de 4 años de esfuerzo y 
                    dedicación, para poder ofrecer a nuestros clientes las mejores soluciones.
                </p>
                <div className="h-4"></div>
                <p className="text-justify">
                    Trabajamos para <em><strong>poner a Colombia en el top 3 de los países más
                    productores agrícolas en el mundo.</strong></em> ¡Únete a nosotros!
                </p>
            </div>
        </>
    );
};
