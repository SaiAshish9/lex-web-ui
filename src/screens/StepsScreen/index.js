import React, { useState } from "react";
import {
  Container,
  Img,
  NavigationCont,
  Step,
  Title,
  Row,
  Step2Img,
  Step3Img,
  Step3ImgCont,
  Step2ImgContainer,
  HighlightImgContainer,
  DownloadImgCont,
  Step1Label,
  TextInput,
  Step3Cont,
  TextArea,
} from "./styles";
import { useParams, useNavigate } from "react-router-dom";
import GoBackImg from "assets/back.png";
import ProceedImg from "assets/proceed.png";
import DownloadImg from "assets/download.png";
import StepLImg from "assets/step2L.png";
import StepRImg from "assets/step2R.png";
import Step3ImgC from "assets/step3.png";
import HighlightImg from "assets/highlight.png";
import { Button } from "screens/HomeScreen/styles";

const StepsScreen = () => {
  let { id } = useParams();
  if (id) id = +id;
  const navigate = useNavigate();

  const [selected, setSelected] = useState(-1);

  function handleClick(type) {
    if (id === 1) navigate("/");
    if (type === "b" && id > 1) navigate("/steps/" + (id - 1));
    if (type === "p" && id < 3) navigate("/steps/" + (id + 1));
    if (type === "d") return;
  }

  const title = [
    "Please Enter the Topic of your Advertisement",
    "Choose the Video Clip for your Advertisement",
    "Download your Video Advertisement",
  ];

  function ImgContainer() {
    return (
      <Row>
        <Step2ImgContainer>
          <Step2Img onClick={() => setSelected(0)} alt="img" src={StepLImg} />
          {selected === 0 && (
            <HighlightImgContainer alt="img" src={HighlightImg} />
          )}
        </Step2ImgContainer>
        <Step2ImgContainer>
          <Step2Img onClick={() => setSelected(1)} alt="img" src={StepRImg} />
          {selected === 1 && (
            <HighlightImgContainer alt="img" src={HighlightImg} />
          )}
        </Step2ImgContainer>
      </Row>
    );
  }

  function Step3Container() {
    return (
      <Step3ImgCont>
        <Step3Img alt="img" src={Step3ImgC} />
      </Step3ImgCont>
    );
  }

  function Step1Container() {
    return (
      <Step3Cont>
        <TextInput placeholder="Write a 30 second long ad for Giani’s ice cream" />
        <Button>Create Content</Button>
        <Step1Label>
          Want to change the Content? Feel free to edit it below!
        </Step1Label>
        <TextArea
          rows="5"
          defaultValue="Giani's ice cream is the perfect way to cool down on a hot summer day. With a wide variety of flavours to choose from, there's something for everyone to enjoy. Giani's also has a variety of toppings and mix-ins to make your ice cream sundae even more appealing"
        />
      </Step3Cont>
    );
  }

  return (
    <Container>
      <Step>STEP {id}</Step>
      <Title>{title[(id ?? 1) - 1]}</Title>
      {id === 1 && <Step1Container />}
      {id === 2 && <ImgContainer />}
      {id === 3 && <Step3Container />}
      <NavigationCont>
        <Img src={GoBackImg} alt="img" onClick={() => handleClick("b")} />
        {id === 1 && (
          <Img src={ProceedImg} alt="img" onClick={() => handleClick("p")} />
        )}
        {id === 2 && selected !== -1 && (
          <Img src={ProceedImg} alt="img" onClick={() => handleClick("p")} />
        )}
        {id === 3 && (
          <DownloadImgCont
            src={DownloadImg}
            alt="img"
            onClick={() => handleClick("d")}
          />
        )}
      </NavigationCont>
    </Container>
  );
};

export default StepsScreen;
