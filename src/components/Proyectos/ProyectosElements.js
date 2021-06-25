import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProyectosHeading = styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 3rem;   
    color: #fff;
    font-size: 3rem;
`;

export const ProyectosSubHeading = styled.h3`
    display: flex;
    font-style: italic;
    font-weight: 500;
    color: #00acbc;/*#d2d2d2;*/
    text-align: center;
    margin: 0 20rem;
    justify-content: center;
    margin-top: 3rem; 
    margin-bottom: 5.5rem;  
`;

export const ProyectosContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const ProyectosWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const ProyectosRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'`: `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        max-height: 555px;
        grid-template-areas: 'col2 col2' 'col1 col1'};
    }
`;

export const ProyectosColumn1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const ProyectosColumn2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const ProyectosTextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const ProyectosTopLine = styled.p`
    color: #00ACBC;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const ProyectosTitle = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;

    }
`;

export const ProyectosDescription = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const ProyectosImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const ProyectosImg = styled.img`
    max-width: 555px;
    margin: 0 0 10px 0;
    padding-right: 0;  
    border-radius: 50%;
`;


export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    position: absolute;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px){
        margin-left: 16px;
        margin-top: 8px;
    };
`;


export const ProyectosBg = styled.div`
    background-color: #010606;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;