import React from 'react';
import Icon1 from '../../images/svg-wave-blue.svg';
import Icon2 from '../../images/svg-wave-blue.svg';
import Icon3 from '../../images/svg-wave-blue.svg';
import { 
    ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH1,
    ServicesH2,
    ServicesP,
} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Service 1</ServicesH2>
                    <ServicesP>Servicios de hidrofonos</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Service 2</ServicesH2>
                    <ServicesP>Servicios de hidrofonos</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Service 3</ServicesH2>
                    <ServicesP>Servicios de hidrofonos</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
};

export default Services;
