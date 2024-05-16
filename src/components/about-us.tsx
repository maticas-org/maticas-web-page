import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export const AboutUs = () => {
    return (
        <>
            <h2 className="text-3xl font-bold text-center">¿Quiénes somos?</h2>
            <div className="h-4"></div>

            {/*Carousel*/}
            <Carousel interval={3000}>
                <Carousel.Item>
                    <img
                        style = {{height: '40vh', marginLeft: 'auto', marginRight: 'auto'}}
                        src="maticas-tech-logo-color-2.svg"
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item
                        style = {{height: '40vh', marginLeft: 'auto', marginRight: 'auto'}}
                >
                    <img
                        style = {{height: '100%', marginLeft: 'auto', marginRight: 'auto'}}
                        src="/src/assets/imgs/danielito.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '60vw', padding: '0px' }}>
                        <h3><strong><em>Danielito</em></strong></h3>
                        <p>Profesional en Matemáticas y Computación, desarrollador backend y de deploy. Fornica bacano.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item
                        style = {{height: '40vh', marginLeft: 'auto', marginRight: 'auto'}}
                >
                    <img
                        style = {{height: '100%', marginLeft: 'auto', marginRight: 'auto'}}
                        src="/src/assets/imgs/davecito.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '60vw', padding: '0px' }}>
                        <h3><strong><em>Dave</em></strong></h3>
                        <p>Profesional en Matemáticas y Computación, desarollador de lo que toque, y de lo que no también. CEO y fundador de Maticas Tech.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            <div className="h-6"></div>

            {/*Propósito*/}
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
