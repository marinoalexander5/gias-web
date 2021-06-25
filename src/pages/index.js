import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeNosotros, homeIntegrantes, homeProyectos, homePublicaciones, homeEventos, homeColaboracion } from '../components/InfoSection/Data';
// import Services from '../components/Services';
import Footer from '../components/Footer';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle} />   {/*(por que????) */}
         <HeroSection />
         <InfoSection {...homeNosotros}/>
         <InfoSection {...homeIntegrantes}/>
         <InfoSection {...homeProyectos}/>
         <InfoSection {...homePublicaciones}/>
         <InfoSection {...homeColaboracion}/>
         <InfoSection {...homeEventos}/>
         {/* <Services /> */}
         <Footer />
        </>
    )
}

export default Home;
