import styled from "styled-components";
import { FontWeight, Styles } from "constants/index";

export const Container = styled.div`
  width: 100%;
  padding-top: 15vh;
`;

export const Content = styled.div`
  width: 40%;
  align-self: flex-start;
`;

export const Row = styled.div`
  ${Styles.RBC};
  width: 100%;
`;

export const Title = styled.p`
  font-size: 2.7rem;
  font-weight: ${FontWeight.bold};
  color: #070e25;
`;

export const SubTitle = styled.p`
  color: #121127;
  opacity: 0.56;
  margin-top: 1rem;
  line-height: 1.5rem;
`;

export const Button = styled.button`
  ${Styles.HideBorder};
  width: 20.7rem;
  cursor: pointer;
  margin-top: 2.4rem;
  border-radius: 0.4rem;
  background: #444bd3;
  color: #fff;
  padding: 0.8rem 0;
`;

export const Img = styled.img`
  width: 40%;
`;
