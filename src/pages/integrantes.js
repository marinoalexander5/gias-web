import React, { useState, useEffect } from 'react';
import Integrantes from '../components/Integrantes';
import {integrantesJose, 
    integrantesAlex, 
    integrantesAndres, 
    integrantesEmiliano,
    integrantesAngel,
    integrantesMiryam,
    integrantesNicolas,
    integrantesVanesa
    } from '../components/Integrantes/Data';
import { IntegrantesHeading, IntegrantesSubHeading, IntegrantesBg, Icon } from '../components/Integrantes/IntegrantesElements';
import { animateScroll as scroll } from 'react-scroll';
import { ScrollTopButton, DolphinIcon } from '../components/ButtonElements';


const IntegrantesPage = () => {

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
        <IntegrantesBg>
            <Icon to="/">GIAS</Icon>
            <IntegrantesHeading>Nuestro Equipo</IntegrantesHeading>
            <IntegrantesSubHeading>Contamos con un grupo interdisciplinario conformado por especialistas de diferentes areas incluyendo la Física, Ingeniería y Biología</IntegrantesSubHeading>
            <Integrantes {...integrantesJose}/>
            <Integrantes {...integrantesMiryam}/>
            <Integrantes {...integrantesVanesa}/>
            <Integrantes {...integrantesNicolas}/>
            <Integrantes {...integrantesAndres}/>
            <Integrantes {...integrantesAlex}/>
            <Integrantes {...integrantesEmiliano}/>
            <Integrantes {...integrantesAngel}/>
            <ScrollTopButton to="#" onClick={() => {scrollTop(); setRotateIcon(true);}} scrollBtn={scrollBtn} duration={1500} delay={1500}>
                <DolphinIcon rotateIcon={rotateIcon} onAnimationEnd={() => setRotateIcon(false)} />
            </ScrollTopButton>
        </IntegrantesBg>
        </>
    )
};

export default IntegrantesPage;