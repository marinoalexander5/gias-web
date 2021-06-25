import React, { useState, useEffect } from 'react';
import Proyectos from '../components/Proyectos';
import { proyectosAutonomo,
    proyectosAmplificador,
    proyectosDetector,
    proyectosHidrofonoCiencia,
    proyectosHidrofonoTesis,
    proyectosHidrofonoTurismo
 } from '../components/Proyectos/Data';
import { ProyectosHeading, ProyectosSubHeading, ProyectosBg, Icon } from '../components/Proyectos/ProyectosElements';
import { animateScroll as scroll } from 'react-scroll';
import { ScrollTopButton, DolphinIcon } from '../components/ButtonElements';

const ProyectosPage = () => {

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
        <ProyectosBg>
            <Icon to="/">GIAS</Icon>
            <ProyectosHeading>Proyectos y Desarrollos</ProyectosHeading>
            <ProyectosSubHeading>Desarrollos de equipamento y software para monitoreo acústico pasivo</ProyectosSubHeading>
            <Proyectos {...proyectosAutonomo}/>
            <Proyectos {...proyectosHidrofonoTurismo}/>
            <Proyectos {...proyectosHidrofonoCiencia}/>
            <Proyectos {...proyectosHidrofonoTesis}/>
            <Proyectos {...proyectosAmplificador}/>
            <Proyectos {...proyectosDetector}/>
            <ScrollTopButton to="#" onClick={() => {scrollTop(); setRotateIcon(true);}} scrollBtn={scrollBtn} duration={1500} delay={1500}>
                <DolphinIcon rotateIcon={rotateIcon} onAnimationEnd={() => setRotateIcon(false)} />
            </ScrollTopButton>
        </ProyectosBg>
        </>
    )
};

export default ProyectosPage;