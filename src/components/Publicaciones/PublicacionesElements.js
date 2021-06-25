import styled from 'styled-components';
import { Link } from 'react-router-dom';


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

export const PublicacionesBg = styled.div`
    background-color: #010606;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const PublicacionesHeading = styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 3rem;   
    color: #fff;
    font-size: 3rem;
`;

export const PublicacionesSubHeading = styled.h3`
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

export const PublicacionesContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '  #010606')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const PublicacionesWrapper = styled.div`
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const PublicacionesRow = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;

    @media screen and (max-width: 768px) {
        max-height: 555px;
    }
`;

export const PublicacionesH2 = styled.h2`
    margin-bottom: 50px;
    margin-top: 6rem;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
        margin-top: 0;
    }
`;

export const PublicacionesList = styled.ul`
    margin-right: auto;
    list-style: none;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const PublicacionesListItem = styled.li`
    font-size: 18px;
    line-height: 24px;\
    padding: 10px 0px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};

    &::marker{
        color: (lightText ? '#f7f8fa' : '#010606');
    }
`;

export const PublicacionesLink = styled.a`
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

