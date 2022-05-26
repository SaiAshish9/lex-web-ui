import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
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
  SpinnerImgCont,
  VideoCont,
} from "./styles";
import { useParams, useNavigate } from "react-router-dom";
import GoBackImg from "assets/back.png";
import ProceedImg from "assets/proceed.png";
import DownloadImg from "assets/download.png";
import StepLImg from "assets/step2L.png";
import StepRImg from "assets/step2R.png";
import SpinnerImg from "assets/spinner.gif";
import HighlightImg from "assets/highlight.png";
import { Button } from "screens/HomeScreen/styles";

const API_URL = "";

function Step1Container({loading, setTopic, setLoading}) {
  const inputRef = useRef();
  const outputRef = useRef();
  const [res, setRes] = useState();
  const [outputTest, setOutputTest] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log(inputRef.current.value);
    setTopic(inputRef.current.value);
    setLoading(true);
    const API_KEY = "";
    const engine = "text-davinci-002";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        prompt: inputRef.current.value,
        temperature: 0,
        max_tokens: 60,
        top_p: 1,
        n: 1,
        stream: false,
      }),
    };
    fetch(
      `https://api.openai.com/v1/engines/${engine}/completions`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.choices[0].text, outputRef);
        setOutputTest(data.choices[0].text);
        setRes(data.choices[0].text);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }

  return (
    <Step3Cont>
      <TextInput
        placeholder="Write a 30 second long ad for Giani’s ice cream"
        ref={inputRef}
      />
      <Button loading={loading} onClick={handleSubmit}>
        {loading ? "Loading..." : "Create Content"}
      </Button>
      <Step1Label>
        Want to change the Content? Feel free to edit it below!
      </Step1Label>
      <TextArea loading={loading} rows="5" value={outputTest} onChange={(v)=>setOutputTest(v)}/>
    </Step3Cont>
  );
}

const StepsScreen = () => {
  let { id } = useParams();
  if (id) id = +id;
  const navigate = useNavigate();

  const [selected, setSelected] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [topic, setTopic] = useState();

  function handleClick(type) {
    if (id === 1) navigate("/");
    if (type === "b" && id > 1) navigate("/steps/" + (id - 1));
    if (type === "p" && id < 3) navigate("/steps/" + (id + 1));
    if (type === "d") return;
  }

  const title = [
    "Please Enter the Topic of your Advertisement",
    "Download your Video Advertisement",
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
    const [videoLoading, setVideoLoading] = useState(true);
    const [url, setUrl] = useState();

    useEffect(() => {
      const fun = async () => {
        try {
          const response = await axios.get(`${API_URL}run`, {
            params: { topic: encodeURIComponent(topic) },
          });
          console.log(response, response.data.message);
          setUrl(response.data.message);
          setVideoLoading(false);
        } catch (e) {
          console.log(e);
        }
      };
      fun();
    }, []);

    return (
      <Step3ImgCont>
        {videoLoading ? (
          <SpinnerImgCont src={SpinnerImg} alt="img" />
        ) : (
          <VideoCont height="100%" width="100%" autoPlay loop muted={false} controls>
            <source src={url} type="video/mp4" />
          </VideoCont>
        )}
      </Step3ImgCont>
    );
  }


  return (
    <Container>
      <Step>STEP {id}</Step>
      <Title>{title[(id ?? 1) - 1]}</Title>
      {id === 1 && <Step1Container loading={loading} setTopic={setTopic} setLoading={setLoading}/>}
      {/* {id === 2 && <ImgContainer />} */}
      {id === 2 && <Step3Container />}
      <NavigationCont>
        <Img src={GoBackImg} alt="img" onClick={() => handleClick("b")} />
        {id === 1 && (
          <Img src={ProceedImg} alt="img" onClick={() => handleClick("p")} />
        )}
        {id === 2 && (
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


