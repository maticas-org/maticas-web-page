import { Navbar } from '../../components/navbar';
import { OurBlogPosts } from '../../components/existing-blog-posts';
import { OurNextBlogPosts } from '../../components/upcoming-blog-posts';
import { Button } from 'react-bootstrap';
import { WhatsappTelegramFloatingButton } from '@/components/contact-floating-button';

export const Blog = () => {
    return (
        <div>
            <Navbar />
            <OurBlogPosts />
            <div className="h-12"></div>
            <OurNextBlogPosts />
            <div className="h-6"></div>
            <Button variant="primary" href="/contact-us"> ¿Algún tema que te gustaría que tratemos? ¡Contáctanos! </Button>
            <WhatsappTelegramFloatingButton />
        </div>
    )
}