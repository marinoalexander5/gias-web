import React, { useState, useEffect } from 'react';
import Eventos from '../components/Eventos';
import { 
    eventosUtn,
    eventosLatam,
    eventosSeminario
 } from '../components/Eventos/Data';
import { EventosHeading, EventosSubHeading, EventosBg, Icon } from '../components/Eventos/EventosElements';
import { LinkButton } from '../components/Eventos/EventosElements'
import { animateScroll as scroll } from 'react-scroll';
import { ScrollTopButton, DolphinIcon } from '../components/ButtonElements';

const EventosPage = () => {

    const [scrollBtn, setScrollBtn] = useState(false);
    const [rotateIcon, setRotateIcon] = useState(false);

    const handleBtnDisplay = () => {
        if(window.scrollY >= 80) {
            setScrollBtn(true);
        } else {
            setScrollBtn(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleBtnDisplay)
    }, [])

    const scrollTop = () => {
        scroll.scrollToTop();
      }

    return (
        <>
        <EventosBg>
            <Icon to="/">GIAS</Icon>
            <EventosHeading>Eventos y Divulgación</EventosHeading>
            <EventosSubHeading>Seminarios, charlas exposiciones con fines de divulgación de las tareas del grupo e intercambio de ideas y experiencias. Envianos tu mail en la seccion de contacto para añadirte a la lista de difusión.</EventosSubHeading>
            <LinkButton to={"/contacto"}>Contacto</LinkButton>
            <Eventos {...eventosLatam}/>
            <Eventos {...eventosSeminario}/>
            <Eventos {...eventosUtn}/>
            <ScrollTopButton to="#" onClick={() => {scrollTop(); setRotateIcon(true);}} scrollBtn={scrollBtn} duration={1500} delay={1500}>
                <DolphinIcon rotateIcon={rotateIcon} onAnimationEnd={() => setRotateIcon(false)} />
            </ScrollTopButton>
        </EventosBg>
        </>
    )
};

export default EventosPage;