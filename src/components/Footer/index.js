import React from 'react';
// import { FaFacebook, FaInstagram, FaToggleOff, FaTwitter, FaYoutube } from 'react-icons/fa';
// import { SocialIcons, SocialIconLink} from './FooterElements';
import {
    FooterContainer,
    FooterLink,
    FooterLinkItems,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterWrap,
    SocialLogo,
    SocialMediaWrap,
    WebsiteRights,
    SocialMedia
} from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {

    const scrollHome = () => {
        scroll.scrollToTop()
    };


    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Nosotros</FooterLinkTitle>
                                <FooterLink to="/">Instituciones</FooterLink>
                                <FooterLink to="/contacto">Contactanos</FooterLink>
                                <FooterLink to="/">Contactanos</FooterLink>
                                <FooterLink to="/">Contactanos</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    {/* <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Nosotros</FooterLinkTitle>
                                <FooterLink to="/">Instituciones</FooterLink>
                                <FooterLink to="/">Contactanos</FooterLink>
                                <FooterLink to="/">Contactanos</FooterLink>
                                <FooterLink to="/">Contactanos</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper> */}
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={scrollHome}>
                            GIAS
                        </SocialLogo>
                        {/* <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//www.youtube.com/" target="_blank" aria-label="YouTube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons> */}
                        <WebsiteRights>GIAS © {new Date().getFullYear()}. All rights reserved.</WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
};

export default Footer;
