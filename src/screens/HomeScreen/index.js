import React from "react";
import {
  Button,
  Container,
  SubTitle,
  SSubTitle,
  Title,
  MTitle,
  Img,
  Content,
  Row,
} from "./styles";
import HomeImg from "assets/home.png";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <MTitle>
        <p>
          The modern way to
          <br /> make Advertisements
        </p>
      </MTitle>
      <Row>
        <Content>
          <Title>
            The modern way to
            <br /> make Advertisements
          </Title>
          <SubTitle>
            Short Deep Fake Video Generation from words
            <br /> in two simple steps!
          </SubTitle>
          <SSubTitle>
            Short Deep Fake Video Generation from words
            <br /> in two simple steps!
          </SSubTitle>
          <Button onClick={() => navigate("/steps/1")}>Get Started</Button>
        </Content>
        <Img alt="img" src={HomeImg} />
      </Row>
    </Container>
  );
};

export default HomeScreen;
