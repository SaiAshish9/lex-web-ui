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
} from "./styles";
import { useParams, useNavigate } from "react-router-dom";
import GoBackImg from "assets/back.png";
import ProceedImg from "assets/proceed.png";
import DownloadImg from "assets/download.png";
import StepLImg from "assets/step2L.png";
import StepRImg from "assets/step2R.png";
import Step3ImgC from "assets/step3.png";
import HighlightImg from "assets/highlight.png";

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

  return (
    <Container>
      <Step>STEP {id}</Step>
      <Title>{title[(id ?? 1) - 1]}</Title>
      {id === 2 && <ImgContainer />}
      {id === 3 && <Step3Container />}
      <NavigationCont>
        <Img src={GoBackImg} alt="img" onClick={() => handleClick("b")} />
        {(id !== 3 || (id === 2 && selected !== -1)) && (
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
