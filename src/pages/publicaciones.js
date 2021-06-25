import React, { useState, useEffect } from 'react';
import Publicaciones from '../components/Publicaciones';
import { publicacionesAcademicas, publicacionesCongresos, publicacionesNotas, publicacionesTesis
 } from '../components/Publicaciones/Data';
import { PublicacionesHeading, PublicacionesSubHeading, PublicacionesBg, Icon } from '../components/Publicaciones/PublicacionesElements';
import { animateScroll as scroll } from 'react-scroll';
import { ScrollTopButton, DolphinIcon } from '../components/ButtonElements';

const PublicacionesPage = () => {

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
        <PublicacionesBg>
            <Icon to="/">GIAS</Icon>
            <PublicacionesHeading>Papers y presentaciones</PublicacionesHeading>
            <PublicacionesSubHeading>Publicaciones y presentaciones en congresos nacionales e internacionales</PublicacionesSubHeading>
            <Publicaciones {...publicacionesAcademicas}/>
            <Publicaciones {...publicacionesCongresos}/>
            <Publicaciones {...publicacionesTesis}/>
            <Publicaciones {...publicacionesNotas}/>
            <ScrollTopButton to="#" onClick={() => {scrollTop(); setRotateIcon(true);}} scrollBtn={scrollBtn} duration={1500} delay={1500}>
                <DolphinIcon rotateIcon={rotateIcon} onAnimationEnd={() => setRotateIcon(false)} />
            </ScrollTopButton>
        </PublicacionesBg>
        </>
    )
};

export default PublicacionesPage;