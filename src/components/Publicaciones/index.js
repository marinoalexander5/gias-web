import React from 'react';
import { PublicacionesContainer, 
    PublicacionesWrapper, 
    PublicacionesRow,
    PublicacionesH2,
    PublicacionesList,
    PublicacionesListItem,
    PublicacionesLink
    } from './PublicacionesElements';



const Publicaciones = ({id, title, publicaciones, lightBg, lightText, darkText }) => {
    return (
        <>
            <PublicacionesContainer lightBg={lightBg} id={id}>
              <PublicacionesWrapper>
                  <PublicacionesRow>
                    <PublicacionesH2 lightText={lightText}>{title}</PublicacionesH2>
                    <PublicacionesList darkText={darkText}>
                        {publicaciones.map((publicacion) => {
                            return (
                                <PublicacionesListItem key={publicacion.id}>
                                    <PublicacionesLink darkText={darkText} lightText={lightText} target="_blank" aria-label="Facebook" href={publicacion.linkTo}>{publicacion.referencia}</PublicacionesLink>             
                                </PublicacionesListItem>
                            )}
                        )}
                    </PublicacionesList>
                  </PublicacionesRow>
              </PublicacionesWrapper>
          </PublicacionesContainer>
        </>
    )
}

export default Publicaciones;
