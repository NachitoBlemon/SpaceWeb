import styled from "styled-components";

export const ContainerNav = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* @media (min-width: 767px) and (max-width: 1025px) {

  } */

`;

export const ContainerStarNav = styled.div`
  padding-left: 2em;
  align-items: center;
 
`;

/*DESKTOP*/
export const ContainerMenuDesktop = styled.div`
  width: 50%;
  height: 6em;
  background: rgba(255, 255, 255, 0.19);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const UL = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const LI = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  &:hover {
    border-bottom: 4px solid #ffffff;
  }
`;

export const LinkMenu = styled.a`
  color: #d0d6f9;
  width: 100%;
  display: flex;
  letter-spacing: 2.7px;
  font-family: "Barlow Condensed";
  text-decoration: none;
`;

/*MOBILE*/
export const ContainerMenuMobile = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavbarMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: rgba(255, 255, 255, 0.19);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  position: fixed;
  top: 0vh;
  right: ${(props) => (props.open ? "0" : "-100%")};
  width: 65vw;
  height: 100vh;
  transition: right 0.3s linear;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    position: initial;
    height: 100vh;
    justify-content: center;
    background: white;
    display: none !important;
  }
`;

export const HamburgerMenu = styled.div`
  img {
    cursor: pointer;
  }
`;

export const UlMobile = styled.ul`
  width: 50vw;
  height: 30vh;
  margin-top: 3vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const LiMobile = styled.li`
  display: flex;
  align-items: center;
`;

export const PMobile = styled.p`
  color: ${(props) => (props.bold === "yes" ? "#ffffff" : "#D0D6F9")};
  font-weight: ${(props) => (props.bold === "yes" ? "600" : "400")};
  letter-spacing: 2.7px;
  font-family: "Barlow Condensed";
  padding-left: 1em;
`;

export const CloseMenu = styled.div`
  width: 60vw;
  display: flex;
  justify-content: flex-end;
  margin-top: 2em;
  margin-right: 4em;

  img {
    cursor: pointer;
  }
`;

/*TABLET STYLES */

export const ContainerMenuTablet = styled.div`
  width: 50%;
  height: 6em;
  background: rgba(146, 146, 146, 0.05);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  align-items: center;

  @media (min-width: 1025px) {
    display: none;
  }
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 767px) and (max-width: 1025px) {
    width: 60%;
  }
`;

export const UlTablet = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LiTablet = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  &:hover {
    border-bottom: 4px solid #ffffff;
  }
`;

export const LinkMenuTablet = styled.a`
  color: #d0d6f9;
  width: 100%;
  display: flex;
  letter-spacing: 2.7px;
  font-family: "Barlow Condensed";
  text-decoration: none;
  @media (min-width: 767px) and (max-width: 1025px) {
    font-size: 1.2em;
  }
`;
