import styled from 'styled-components';
import { FaLinkedin, FaResearchgate, FaInstagram, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin-top: 50px;
  padding: 0 16px;  
  background-color: #f9f9f9;
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

export const IntegrantesHeading = styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 3rem;   
    color: #fff;
    font-size: 3rem;
`;

export const IntegrantesSubHeading = styled.h3`
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

export const IntegrantesRow = styled.div`
    padding: 0 80px;
    margin-bottom: 20px;
`;

export const IntegrantesColumn = styled.div`
    float:left;
    width: 33.3%;
    margin-bottom: 16px;
    padding: 0 8px;

    @media screen and (max-width: 650px) {
        width: 100%;
        display: block;
  }
`;

export const IntegrantesCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`;

export const IntegrantesImg = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    box-shadow: 0 5px 11px 0 rgb(51 143 158), 0 4px 15px 0 rgb(70 150 149);
    margin-bottom: 5px;
    filter: none;
    transition: filter 0.4s ease-in-out;

    &:hover{
        filter: none;
    }
    
`;

export const IntegrantesH1 = styled.h1`
    color: #f9f9f9;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    justify-content: center;
    font-size: 1.5rem; 
`;

export const IntegrantesH2 = styled.h2`
    color: #A0A0A0;
    justify-content: center;
    font-size: 1rem; 
    padding-bottom: 10px;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const SocialIconLink = styled.a`
    color: #4f4f4f;
    padding: 5px;
    transition: transform 0.4s ease-in-out;

    &:hover{
    transform: scale(1.1);
    }
`;

export const FaLinkedinStyled = styled(FaLinkedin)`
    color: #00ACBC;
    height: 26px;
    width: 26px;
`;

export const FaInstagramStyled = styled(FaInstagram)`
    color: #00ACBC;
    height: 26px;
    width: 26px;
`;

export const FaGithubStyled = styled(FaGithub)`
    color: #00ACBC;
    height: 26px;
    width: 26px;
`;

export const FaResearchgateStyled = styled(FaResearchgate)`
    color: #00ACBC;
    height: 26px;
    width: 26px;
`;

export const IntegrantesBg = styled.div`
    background-color: #010606;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;