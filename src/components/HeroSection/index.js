import React, { useState } from 'react';
import Video from '../../videos/blue-water.mp4';
import Cethus from  '../../images/hero-logo-cethus.png';
import Untref from  '../../images/hero-logo-untref.png';
import { HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper,
    HeroLogos,
    LogoCethus,
    LogoUntref, 
    ArrowForward,
    ArrowRight 
} from './HeroElements';
import { Button } from '../ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>GIAS</HeroH1>
                <HeroP>
                    Grupo de Investigacion en Acústica Subacuática
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="contacto" 
                        primary="true" 
                        dark="true" 
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        offset={-80}
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}>
                        Contactanos {hover ? <ArrowForward /> : <ArrowRight></ArrowRight>}
                    </Button>
                </HeroBtnWrapper>
                <HeroLogos>
                    <a target="_blank" aria-label="Cethus" href="https://www.facebook.com/FundacionCethus/">
                        <LogoCethus src={Cethus} />
                    </a>
                    <a target="_blank" aria-label="Untref" href="http://www.untref.edu.ar/">
                        <LogoUntref src={Untref} />
                    </a>
                </HeroLogos>
            </HeroContent>
        </HeroContainer>
    )
}


// Video by Engin Akyurt from Pexels

export default HeroSection;
