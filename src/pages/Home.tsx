import { Navbar } from '../components/navbar';
import { MainCarousel } from '../components/main-carousel';

function Home() {
  return (
    <>
      <div>
        <Navbar/>
        <div className="h-8"></div>
        <MainCarousel/>
      </div>
    </>
  )
}

export default Home;