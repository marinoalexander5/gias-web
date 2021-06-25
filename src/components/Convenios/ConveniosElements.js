import styled from 'styled-components';
import { Link } from 'react-router-dom';
 
export const ConveniosBg = styled.div`
    background-color: #010606;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const ConveniosContainer = styled.div`
  
  padding: 50px 16px;  
  background: ${({bgDark}) => (bgDark ? '#010606' : '#f9f9f9')};
  color: ${({textDark}) => (textDark ? '#010606' : '#f9f9f9')};
  

  @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
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

export const ConveniosHeading = styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 3rem;   
    color: #fff;
    font-size: 3rem;
`;

export const ConveniosSubHeading = styled.h3`
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

export const ConveniosRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'`: `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        max-height: 555px;
        grid-template-areas: 'col2 col2' 'col1 col1'};
    }
`;

export const ConveniosColumn1 = styled.div`
    margin: 15px 0;
    padding: 0 15px;
    grid-area: col1;
`;

export const ConveniosColumn2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const ConveniosP = styled.p`
    font-size: 24px;
    display: flex;
    justify-content: ${({imgStart}) => (imgStart ? 'flex-start' :  'flex-end')};
`;

export const ConveniosImg = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    margin-left: ${({imgStart}) => (imgStart ? 'auto' :  0 )};
    justify-content: ${({imgStart}) => (imgStart ? 'flex-end' :  'flex-start')};
`;