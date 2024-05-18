import { Navbar } from '../components/navbar';
import { MainCarousel } from '../components/main-carousel';
import { OurServices } from '../components/services';
import { AboutUs } from '@/components/about-us';
import { WhatsappTelegramFloatingButton } from '@/components/contact-floating-button';

function Home() {
  return (
    <>
      <div>
        <Navbar/>
        <div className="h-4"></div>
        <MainCarousel/>
        <OurServices/>
        <AboutUs/>
        <WhatsappTelegramFloatingButton/>
      </div>
    </>
  )
}

export default Home;