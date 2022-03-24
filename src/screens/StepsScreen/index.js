import React from "react";
import { Container, Img, NavigationCont, Step, Title } from "./styles";
import { useParams, useNavigate } from "react-router-dom";
import GoBackImg from "assets/back.png";
import ProceedImg from "assets/proceed.png";
import DownloadImg from "assets/download.png";

const StepsScreen = () => {
  let { id } = useParams();
  if (id) id = +id;
  const navigate = useNavigate();

  function handleClick(type) {
    if (id === 1) navigate("/");
    if (type === "b" && id > 1) navigate("/steps/" + (id - 1));
    if (type === "p" && id < 3) navigate("/steps/" + (id + 1));
    if (type === "d") return;
  }

  return (
    <Container>
      <Step>STEP {id}</Step>
      <Title>Please Enter the Topic of your Advertisement</Title>
      <NavigationCont>
        <Img src={GoBackImg} alt="img" onClick={() => handleClick("b")} />
        {id !== 3 && (
          <Img src={ProceedImg} alt="img" onClick={() => handleClick("p")} />
        )}
        {id === 3 && (
          <Img src={DownloadImg} alt="img" onClick={() => handleClick("d")} />
        )}
      </NavigationCont>
    </Container>
  );
};

export default StepsScreen;
