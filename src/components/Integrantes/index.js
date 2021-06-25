import React from 'react';
import { Container, 
    IntegrantesCard, 
    IntegrantesColumn, 
    IntegrantesH1, 
    IntegrantesH2, 
    IntegrantesImg, 
    IntegrantesRow, 
    SocialIconLink, 
    SocialIcons, 
    FaLinkedinStyled, 
    FaResearchgateStyled, 
    FaInstagramStyled, 
    FaGithubStyled
    } from './IntegrantesElements';


const Integrantes = ({id, img, alt, nombre, especialidad, linkedin, instagram, github, researchgate}) => {
    return (
        <>
            <Container id={id}>
                <IntegrantesRow>
                    <IntegrantesColumn>
                        <IntegrantesCard>
                            <IntegrantesImg src={img} alt={alt} />
                            <IntegrantesH1>{nombre}</IntegrantesH1>
                            <IntegrantesH2>{especialidad}</IntegrantesH2>
                            <SocialIcons>
                                <SocialIconLink href={"//www.linkedin.com/" + linkedin} target="_blank" aria-label="Linkedin">
                                    <FaLinkedinStyled />
                                </SocialIconLink>
                                <SocialIconLink href={"//www.instagram.com/" + instagram} target="_blank" aria-label="Instagram">
                                    <FaInstagramStyled />
                                </SocialIconLink>
                                <SocialIconLink href={"//www.github.com/" + github} target="_blank" aria-label="Github">
                                    <FaGithubStyled />
                                </SocialIconLink>
                                <SocialIconLink href={"//www.researchgate.net/" + researchgate} target="_blank" aria-label="Researchgate">
                                    <FaResearchgateStyled />
                            </SocialIconLink>
                        </SocialIcons>
                        </IntegrantesCard>
                    </IntegrantesColumn>
                </IntegrantesRow>
            </Container>
        </>
    )
}

export default Integrantes;
