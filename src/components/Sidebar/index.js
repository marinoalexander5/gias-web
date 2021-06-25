import React from 'react';
import { SidebarContainer, 
    CloseIcon, 
    Icon, 
    SideBtnWrap, 
    SidebarLink, 
    SidebarRoute, 
    SidebarWrapper, 
    SidebarMenu } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="nosotros" onClick={toggle}>
                        Nosotres
                    </SidebarLink>
                    <SidebarLink to="integrantes" onClick={toggle}>
                        Integrantes
                    </SidebarLink>
                    <SidebarLink to="proyectos" onClick={toggle}>
                        Proyectos
                    </SidebarLink>
                    <SidebarLink to="publicaciones" onClick={toggle}>
                        Publicaciones
                    </SidebarLink>
                    <SidebarLink to="eventos" onClick={toggle}>
                        Eventos
                    </SidebarLink>
                    <SidebarLink to="colaboracion" onClick={toggle}>
                        Colaboración
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/contacto">Contacto</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
