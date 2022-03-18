import styled from "styled-components";
import mobileBackground from "../../assets/space-tourism-website-main/starter-code/assets/home/background-home-mobile.jpg";

import tabletBackground from "../../assets/space-tourism-website-main/starter-code/assets/home/background-home-tablet.jpg";

import desktopBackground from "../../assets/space-tourism-website-main/starter-code/assets/home/background-home-desktop.jpg";

/* border: 1px solid red; */
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  @media (min-width: 320px) {
    background: url(${mobileBackground}) no-repeat center/cover;
    justify-content: space-around;
    flex-flow: column wrap;
    align-items: center;
  }
  @media (min-width: 768px) {
    background: url(${tabletBackground}) no-repeat center/cover;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    background: url(${desktopBackground}) no-repeat center/cover;
    flex-flow: row wrap;
  } ;
`;

export const ContainerSection = styled.div`
  @media (min-width: 1024px) {
    width: 53vw;
    height: 50vh;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    padding-left: 6em;
    justify-content: flex-start;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    height: 45vh;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 10vh;
  }
  @media (min-width: 320px) {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }
`;
export const ContainerTitle = styled.div`
  width: 80%;
  display: flex;
  flex-flow: column wrap;
  text-align: center;
  line-height: 3vh;
  color: #d0d6f9;

  h5 {
    letter-spacing: 4.75px;
    font-size: 1.2em;
    font-family: "Barlow Condensed";
    color: #d0d6f9;
  }
  h3 {
    font-family: "Bellefair";
    font-size: 4.6em;
    color: #ffffff;
    font-weight: 400;
    line-height: 10vh;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h5 {
      font-size: 1.6em;
    }

    h3 {
      margin-top: 0.3em;
      font-size: 8em;
    }
  }

  @media (min-width: 1024px) {
    h5 {
      font-size: 2.1em;
      text-align: left;
    }

    h3 {
      text-align: left;
      font-size: 8em;
      line-height: 1em;
    }
  }
`;

export const ContainerParagraph = styled.div`
  width: 65%;
  p {
    font-family: "Roboto";
    text-align: center;
    color: #d0d6f9;
    font-size: 1.1em;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 60%;
    text-align: center;
    font-size: 1.5em;
    line-height: 1.2em;
    margin-top: 3em;
  }
  @media (min-width: 1024px) {
    width: 80%;
    font-size: 1.3em;
    p {
      text-align: start;
      line-height: 1.5em;
    }
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  width: 55%;
  height: 25%;
  margin-bottom: 5vh;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: auto;
    height: 25vh;
  }
  @media (min-width: 1024px) {
    height: auto;
    width: 36vw;
    margin-bottom: 0px;
  }
`;

export const ButtonHome = styled.button`
  padding: 0px;
  margin: 0px;
  font-family: "Bellefair";
  font-size: 1.5vh;
  width: 12em;
  height: 12em;
  max-width: 12em;
  background: #ffffff;
  border-radius: 6em;
  border: none;
  transition: box-shadow 1s;
  cursor: pointer;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2vh;
  }
  @media (min-width: 1024px) {
    font-size: 2.3vh;
  }
`;
