import React from "react";
import {
  ButtonHome,
  Container,
  ContainerButton,
  ContainerParagraph,
  ContainerSection,
  ContainerTitle,
} from "./StyledHome";
import Navbar from "../navbar/Navbar";

const Home = (props) => {
  return (
    <Container>
      <Navbar />
      <ContainerSection>
        <ContainerTitle>
          <h5>ASÍ QUE QUIERES VIAJAR AL</h5>
          <h3 bold="yes">ESPACIO</h3>
        </ContainerTitle>

        <ContainerParagraph>
          <p>
            Seamos sinceros; si quieres ir al espacio, también podrías ir
            genuinamente al espacio exterior y no flotar en el borde. ¡Pues
            siéntate y relájate porque te daremos una experiencia verdaderamente
            fuera de este mundo!
          </p>
        </ContainerParagraph>
      </ContainerSection>
      <ContainerButton>
        <ButtonHome>EXPLORAR</ButtonHome>
      </ContainerButton>
    </Container>
  );
};

export default Home;
