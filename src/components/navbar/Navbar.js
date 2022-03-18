import React from "react";

import {
  ContainerNav,
  ContainerStarNav,
} from "./StyledNavbar";
import StarIcon from "../../assets/space-tourism-website-main/starter-code/assets/shared/logo.svg";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import TabletNav from "./TabletNav";



const Navbar = () => {



  
  return (
    <ContainerNav>
      <ContainerStarNav>
        <img src={StarIcon} />
      </ContainerStarNav>
      <TabletNav/>
      <DesktopNav/>
      <MobileNav/>
      
    </ContainerNav>
  );
};

export default Navbar;
