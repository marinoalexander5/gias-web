import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll';


const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false)
        }
    };
    
    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, [])

    const scrollHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={scrollHome}>GIAS</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="nosotres" 
                                    smooth={true} duration={500} spy={true} offset={-80}
                                    >Nosotres</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="integrantes"
                                smooth={true} duration={500} spy={true} offset={-80}
                                >Integrantes</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="proyectos"
                                smooth={true} duration={500} spy={true} offset={-80}
                                >Proyectos</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="publicaciones"
                                smooth={true} duration={500} spy={true} offset={-80}
                                >Publicaciones</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="colaboracion"
                                smooth={true} duration={500} spy={true} offset={-80}
                                >Colaboración</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="eventos"
                                smooth={true} duration={500} spy={true} offset={-80}
                                >Eventos</NavLinks>
                            </NavItem>
                            <NavBtn>
                                <NavBtnLink to="/contacto">Contacto</NavBtnLink>
                            </NavBtn>
                        </NavMenu>
                        <NavBtn>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
