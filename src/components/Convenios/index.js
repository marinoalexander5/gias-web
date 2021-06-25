import React from 'react'
import { ConveniosRow, 
    ConveniosColumn1, 
    ConveniosColumn2, 
    ConveniosP, 
    ConveniosImg, 
    ConveniosContainer
    } from './ConveniosElements';


const Convenios = ({id, universidad, anio, logo, imgStart, bgDark, textDark}) => {
    return (
        <>
        <ConveniosContainer id={id}  bgDark={bgDark} textDark={textDark}>
            <ConveniosRow imgStart={imgStart}>
                <ConveniosColumn1>
                    <ConveniosP imgStart={imgStart}>{universidad}, {anio}</ConveniosP>
                </ConveniosColumn1>
                <ConveniosColumn2>
                    <ConveniosImg imgStart={imgStart} src={logo}></ConveniosImg>
                </ConveniosColumn2>
            </ConveniosRow>
        </ConveniosContainer>
        </>
    )
}

export default Convenios;
