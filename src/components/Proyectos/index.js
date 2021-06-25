import React from 'react';
import { ProyectosContainer, 
    ProyectosWrapper,
    ProyectosColumn1,
    ProyectosColumn2, 
    ProyectosTopLine, 
    ProyectosDescription,
    ProyectosImgWrap, 
    ProyectosImg, 
    ProyectosRow,
    ProyectosTextWrapper,
    ProyectosTitle, 
    } from './ProyectosElements';
import { BtnWrap } from '../InfoSection/InfoElements';
import { LinkButton } from '../ButtonElements';


const Proyectos = ({id, img, alt, topLine, title, description, lightBg, imgStart, lightText, darkText, linkTo, dark, primary }) => {
    return (
        <>
            <ProyectosContainer lightBg={lightBg} id={id}>
              <ProyectosWrapper>
                  <ProyectosRow imgStart={imgStart}>
                      <ProyectosColumn1>
                          <ProyectosTextWrapper>
                              <ProyectosTopLine>{topLine}</ProyectosTopLine>
                              <ProyectosTitle lightText={lightText}>{title}</ProyectosTitle>
                              <ProyectosDescription darkText={darkText}>{description}</ProyectosDescription>
                          </ProyectosTextWrapper>
                          <BtnWrap>
                                <LinkButton to={'/' + linkTo } 
                                duration={500}
                                offset={-80}
                                dark={dark ? 1 : 0} 
                                primary={primary ? 1 : 0}
                                >
                                Ver Galería</LinkButton>
                            </BtnWrap>
                      </ProyectosColumn1>
                      <ProyectosColumn2>
                          <ProyectosImgWrap>
                              <ProyectosImg src={img} alt={alt}/>
                          </ProyectosImgWrap>
                      </ProyectosColumn2>
                  </ProyectosRow>
              </ProyectosWrapper>
          </ProyectosContainer>
        </>
    )
}

export default Proyectos;
