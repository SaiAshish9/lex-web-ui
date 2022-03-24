import styled from "styled-components";
import { FontWeight, Styles, BREAKPOINTS } from "constants/index";

export const Container = styled.div`
  width: 100%;
  padding-top: 15vh;
  @media only screen and (max-width: ${BREAKPOINTS.xl}) {
    padding-top: 21vh;
  }
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    padding-top: 7vh;
  }
`;

export const Content = styled.div`
  width: 60%;
  align-self: flex-start;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    width: 100%;
    margin: auto;
    ${Styles.CBC}
  }
`;

export const Row = styled.div`
  ${Styles.RBC};
  width: 100%;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    flex-direction: column-reverse;
  }
`;

export const Title = styled.p`
  font-size: 2.7rem;
  font-weight: ${FontWeight.bold};
  color: #070e25;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    display: none;
  }
`;

export const MTitle = styled.div`
  font-size: 2.1rem;
  width: 100%;
  font-weight: ${FontWeight.bold};
  color: #070e25;
  margin-bottom: 2.4rem;
  ${Styles.RCC};
  @media only screen and (min-width: ${BREAKPOINTS.lg}) {
    display: none;
  }
  @media only screen and (max-width: ${BREAKPOINTS.xs}) {
    font-size: 1.6rem;
    ${Styles.RBC};
  }
`;

export const SubTitle = styled.p`
  color: #121127;
  opacity: 0.56;
  margin-top: 1rem;
  line-height: 1.5rem;
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    font-size: 0.9rem;
  }
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
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    margin-top: 1.8rem;
    width: 22rem;
  }
  @media only screen and (max-width: ${BREAKPOINTS.xs}) {
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 40%;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    width: 50%;
    align-self: flex-start;
    margin: auto;
  }
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    width: 80%;
    margin: 1rem auto;
  }
`;
