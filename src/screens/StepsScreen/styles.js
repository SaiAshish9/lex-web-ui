import styled from "styled-components";
import { FontWeight, Styles } from "constants/index";
import { BREAKPOINTS } from "constants";

export const Container = styled.div`
  width: 100%;
  padding-top: 5vh;
`;

export const Step2ImgContainer = styled.div`
  width: 49%;
  position: relative;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    width: 100%;
  }
`;

export const Step2Img = styled.img`
  width: 100%;
`;

export const HighlightImgContainer = styled.img`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
`;

export const SpinnerImgCont = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const Step3Img = styled.img`
  width: 60%;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    width: 100%;
  }
`;

export const Step3ImgCont = styled.div`
  ${Styles.RCC};
  width: 60%;
  margin: 1rem auto;
  background: #000;
  height: 50vh;
  border-radius: 2rem;
  padding: 0px;
  overflow: hidden;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    width: 100%;
  }
`;

export const VideoCont = styled.video`
  width: 100%;
  object-fit: cover;
  height: 50vh;
`;

export const Row = styled.div`
  ${Styles.RBC};
  width: 100%;
  cursor: pointer;
  margin: 2.7rem auto;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    flex-wrap: wrap;
    margin: 1.8rem auto 1.2rem;
  }
`;

export const Step = styled.p`
  color: #444bd3;
  font-weight: ${FontWeight.semiBold};
`;

export const Title = styled.p`
  font-size: 1.8rem;
  font-weight: ${FontWeight.bold};
  color: #070e25;
  margin-top: 1.2rem;
  margin-bottom: 1.8rem;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    font-size: 1.4rem;
  }
`;

export const NavigationCont = styled.div`
  ${Styles.RBC};
  margin-top: 1rem;
`;

export const Img = styled.img`
  width: 12rem;
  cursor: pointer;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    width: 9rem;
  }
`;

export const DownloadImgCont = styled.img`
  width: 8rem;
  cursor: pointer;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    width: 6.3rem;
  }
`;

export const Step1Label = styled.p`
  color: #6a86da;
  font-weight: ${FontWeight.semiBold};
  margin: 1.8rem 0 1rem;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    margin: 1.8rem 0 0.4rem;
  }
`;

export const TextInput = styled.input`
  margin: 0px;
  font-size: 1rem;
  border: 1px solid #dadada;
  padding: 1.2rem 1.5rem;
  font-weight: ${FontWeight.light};
  color: #121127;
  opacity: 0.7;
  ::placeholder {
    color: #121127;
    opacity: 0.5;
  }
`;

export const TextArea = styled.textarea`
  margin: 0px;
  font-size: 1rem;
  border: 1px solid #dadada;
  padding: 1.2rem 1.5rem;
  margin: 1.5rem 0;
  resize: none;
  line-height: 1.8rem;
  font-weight: ${FontWeight.light};
  color: #121127;
  opacity: 0.7;
  ::placeholder {
    color: #121127;
    opacity: 0.5;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Step3Cont = styled.form`
  display: flex;
  flex-direction: column;
`;
