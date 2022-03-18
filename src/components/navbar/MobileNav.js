import React, { useState } from "react";
import {
  CloseMenu,
  ContainerMenuMobile,
  HamburgerMenu,
  LiMobile,
  LinkMenu,
  NavbarMobile,
  PMobile,
  UlMobile,
} from "./StyledNavbar";
import IconHamburger from "../../assets/space-tourism-website-main/starter-code/assets/shared/icon-hamburger.svg";
import IconClose from "../../assets/space-tourism-website-main/starter-code/assets/shared/icon-close.svg";

const MobileNav = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpenClick = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <ContainerMenuMobile>
      <HamburgerMenu>
        <img
          src={IconHamburger}
          alt="Menu"
          onClick={handleOpenClick}
          open={open}
        />
      </HamburgerMenu>
      <NavbarMobile open={open}>
        <CloseMenu>
          <img src={IconClose} onClick={handleOpenClick} open={open} />
        </CloseMenu>
        <UlMobile>
          <LiMobile>
            <LinkMenu href="#">
              <PMobile bold="yes">00</PMobile>
              <PMobile>INICIO</PMobile>
            </LinkMenu>
          </LiMobile>
          <LiMobile>
            <LinkMenu href="#">
              <PMobile bold="yes">01</PMobile>
              <PMobile>DESTINO</PMobile>
            </LinkMenu>
          </LiMobile>
          <LiMobile>
            <LinkMenu href="#">
              <PMobile bold="yes">02</PMobile>
              <PMobile>ESCUADRON</PMobile>
            </LinkMenu>
          </LiMobile>
          <LiMobile>
            <LinkMenu href="#">
              <PMobile bold="yes">03</PMobile>
              <PMobile>TECNOLOGIA</PMobile>
            </LinkMenu>
          </LiMobile>
        </UlMobile>
      </NavbarMobile>
      
    </ContainerMenuMobile>
  );
};

export default MobileNav;
