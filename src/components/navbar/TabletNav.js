import React from 'react';
import { ContainerMenuTablet, UlTablet, LiTablet, LinkMenuTablet } from './StyledNavbar';


const TabletNav = () => {
    return (
<ContainerMenuTablet>
        <UlTablet>
          <LiTablet>
            <LinkMenuTablet href="#">INICIO</LinkMenuTablet>
          </LiTablet>
          <LiTablet>
            <LinkMenuTablet href="#">DESTINO</LinkMenuTablet>
          </LiTablet>
          <LiTablet>
            <LinkMenuTablet href="#">TRIPULACION</LinkMenuTablet>
          </LiTablet>
          <LiTablet>
            <LinkMenuTablet href="#">TECNOLOGIA</LinkMenuTablet>
          </LiTablet>
        </UlTablet>
      </ContainerMenuTablet>
    );
}
 
export default TabletNav;