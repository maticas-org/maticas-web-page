import './extra.css'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"


export const WhatsappTelegramFloatingButton = () => {
    return (
        // This is the floating button that appears on the bottom right of the screen
    <AlertDialog>
    <AlertDialogTrigger>
        <img src = "/contact-floating-button.svg" className="fixed bottom-0 right-0 m-4 w-16 h-16" alt="Contact us" style={{cursor: "pointer", borderRadius: "50%"}}/>
    </AlertDialogTrigger>
    <AlertDialogContent>
        <AlertDialogHeader>
        <AlertDialogTitle>¿Qué medio prefieres?</AlertDialogTitle>
        <AlertDialogDescription>
            ¿Quieres contactarnos por Whatsapp o Telegram? Ayudarte será un placer.
        </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
        <AlertDialogCancel>Cancelar</AlertDialogCancel>

            <a href="https://wa.me/573212585695" target="_blank" rel="noreferrer">
            <AlertDialogAction>
                Whatsapp
            </AlertDialogAction>
            </a>

            <a href="https://t.me/davealsina" target="_blank" rel="noreferrer">
            <AlertDialogAction>Telegram</AlertDialogAction>
            </a>
        </AlertDialogFooter>
    </AlertDialogContent>
    </AlertDialog>
    )
}