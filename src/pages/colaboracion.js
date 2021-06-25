import React, { useState, useEffect } from 'react';
import Convenios from '../components/Convenios';
import { convenioUtn, convenioUnsj, convenioUsp } from '../components/Convenios/Data';
import { ConveniosHeading, ConveniosSubHeading, ConveniosBg, Icon } from '../components/Convenios/ConveniosElements';
import { animateScroll as scroll } from 'react-scroll';
import { ScrollTopButton, DolphinIcon } from '../components/ButtonElements';

const ConveniosPage = () => {

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
        <ConveniosBg>
            <Icon to="/">GIAS</Icon>
            <ConveniosHeading>Convenios</ConveniosHeading>
            <ConveniosSubHeading>Promovemos el trabajo colaborativo a través de convenios inter-institucionales.</ConveniosSubHeading>
            <Convenios {...convenioUtn}/>
            <Convenios {...convenioUnsj}/>
            <Convenios {...convenioUsp}/>
            <ScrollTopButton to="#" onClick={() => {scrollTop(); setRotateIcon(true);}} scrollBtn={scrollBtn} duration={1500} delay={1500}>
                <DolphinIcon rotateIcon={rotateIcon} onAnimationEnd={() => setRotateIcon(false)} />
            </ScrollTopButton>
        </ConveniosBg>
        </>
    )
};

export default ConveniosPage;