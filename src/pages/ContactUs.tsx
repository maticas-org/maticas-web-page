import { WhatsappTelegramFloatingButton } from '@/components/contact-floating-button';
import { Navbar } from '@/components/navbar';


export const ContactUs = () => {
    return (
        <div>
            <Navbar/>
            <div className="h-4"></div>
            <h1 className="text-2xl font-bold text-center">Hablemos de tu proyecto</h1>
            <p className="text-center">Estamos listos para ayudarte a llevar tu proyecto al siguiente nivel o ayudarte en lo que necesites</p>
            <p className="text-center">Contáctanos a través de los siguientes medios:</p>

            <div className="flex justify-center my-4">
                <a href="https://wa.me/573212585695" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white p-2 rounded-md mx-2">WhatsApp</a>
                <a href="https://t.me/davealsina" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white p-2 rounded-md mx-2">Telegram</a>
            </div>
            <div className="h-8"></div>

            <img
                style = {{height: '40vh', marginLeft: 'auto', marginRight: 'auto'}}
                src="maticas-tech-logo-color-2.svg"
                alt="First slide"
            />
            <div className="h-8"></div>
            <p className="text-center">O escríbenos a nuestro correo electrónico:  
                <a href="mailto:dave.alsina@maticas-tech.com" className="text-blue-500">
                dave.alsina@maticas-tech.com
                </a>
            </p>
            <p className="text-center"> Si prefieres llamar, puedes hacerlo al número: <a href="tel:+573212585695" className="text-blue-500">+57 321 2585695</a></p>
            <WhatsappTelegramFloatingButton/>
        </div>
    )
    }

export default ContactUs;