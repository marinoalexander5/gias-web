import React from 'react';
import { EventosContainer, 
    EventosWrapper,
    EventosColumn1,
    EventosColumn2, 
    EventosTopLine, 
    EventosDescription,
    EventosImgWrap, 
    EventosImg, 
    EventosRow,
    EventosTextWrapper,
    EventosTitle, 
    } from './EventosElements';


const Eventos = ({id, img, alt, topLine, title, description, lightBg, imgStart, lightText, darkText, dark, primary }) => {
    return (
        <>
            <EventosContainer lightBg={lightBg} id={id}>
              <EventosWrapper>
                  <EventosRow imgStart={imgStart}>
                      <EventosColumn1>
                          <EventosTextWrapper>
                              <EventosTopLine>{topLine}</EventosTopLine>
                              <EventosTitle lightText={lightText}>{title}</EventosTitle>
                              <EventosDescription darkText={darkText}>{description}</EventosDescription>
                          </EventosTextWrapper>
                          {/* <BtnWrap>
                            <LinkButton to={'/contacto'} 
                            duration={500}
                            offset={-80}
                            dark={dark ? 1 : 0} 
                            primary={primary ? 1 : 0}
                            >
                            Solicitar Información</LinkButton>
                        </BtnWrap> */}
                      </EventosColumn1>
                      <EventosColumn2>
                          <EventosImgWrap>
                              <EventosImg src={img} alt={alt}/>
                          </EventosImgWrap>
                      </EventosColumn2>
                  </EventosRow>
              </EventosWrapper>
          </EventosContainer>
        </>
    )
}

export default Eventos;
