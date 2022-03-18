import React from 'react';
import { ContainerMenuDesktop, LI, LinkMenu, UL } from './StyledNavbar';



const DesktopNav = () => {
    return (
        <ContainerMenuDesktop>
        <UL>
          <LI>
            <LinkMenu href="#">00 INICIO</LinkMenu>
          </LI>
          <LI>
            <LinkMenu href="#">01 DESTINO</LinkMenu>
          </LI>
          <LI>
            <LinkMenu href="#">02 TRIPULACION</LinkMenu>
          </LI>
          <LI>
            <LinkMenu href="#">03 TECNOLOGIA</LinkMenu>
          </LI>
        </UL>
      </ContainerMenuDesktop>
    );
}
 
export default DesktopNav;