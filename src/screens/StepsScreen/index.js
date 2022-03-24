import React from "react";
import { Container, Step, Title } from "./styles";
import { useParams } from "react-router-dom";

const StepsScreen = () => {
  const { id } = useParams();

  return (
    <Container>
      <Step>STEP {id}</Step>
      <Title>Please Enter the Topic of your Advertisement</Title>
    </Container>
  );
};

export default StepsScreen;
