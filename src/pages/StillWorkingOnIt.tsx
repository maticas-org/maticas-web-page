import { WhatsappTelegramFloatingButton } from '@/components/contact-floating-button';
import { Navbar } from '@/components/navbar';
import { Button } from 'react-bootstrap';


export const StillWorkingOnIt = () => {
    return (
        <div>
            <Navbar/>
            <div className="h-4"></div>
            <h1 className="text-2xl font-bold text-center">Nos atrapaste 😅, aún estamos trabajando en esa página 🔨</h1>
            <div className="h-2"></div>
            <p className="text-center">Nos movemos lo más rápido posible para traerte esta información.</p>
            <p className="text-center">Si tienes alguna pregunta, sobre el contenido de esta página o cualquier otro tema, no dudes en contactarnos.</p>
            <div className="h-8"></div>
            <Button variant="primary" href="/es/contactanos"> ¡Hablemos! </Button>

            <WhatsappTelegramFloatingButton/>
        </div>
    )
}
