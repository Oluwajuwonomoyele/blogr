import Hero from '../components/hero';
import Info from '../components/info';
import State from '../components/state';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useState } from 'react';
import MobileNav from '../components/mobileNav';
import { infoObjOne, infoObjTwo } from '../infoData';

const Home = () => {
    const [openNav, setOpenNav] = useState(false);

    const handleClick = () => {
        setOpenNav(!openNav);
    }
    return (  
        <>  
            <MobileNav openNav={openNav} />
            <Navbar handleClick={handleClick} openNav={openNav} />
            <Hero />
            <Info {...infoObjOne}/>
            <State />
            <Info {...infoObjTwo}/>
            <Footer />
        </>
    );
}
 
export default Home;