import React from "react";
import {
  Button,
  Container,
  SubTitle,
  Title,
  Img,
  Content,
  Row,
} from "./styles";
import HomeImg from "assets/home.png";

const HomeScreen = () => {
  return (
    <Container>
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
          <Button>Get Started</Button>
        </Content>
        <Img alt="img" src={HomeImg} />
      </Row>
    </Container>
  );
};

export default HomeScreen;
