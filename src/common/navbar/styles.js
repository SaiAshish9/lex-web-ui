import styled from "styled-components";
import { Styles, FontWeight, FontFamily } from "constants/index";

export const Container = styled.div`
  width: 86vw;
  position: fixed;
  padding: 1rem 0;
  font-family: "Inter", sans-serif !important;
  margin: 0 7vw;
  ${Styles.RBC}
`;

export const Img = styled.img`
  height: 2rem;
  cursor: pointer;
`;

export const NavButton = styled.button`
  padding: 0.4rem 0.7rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: ${FontWeight.medium};
  color: #121127;
  ${Styles.HideBorder};
  border: 2px solid rgba(18, 18, 18, 0.12) !important;
  border-radius: 0.4rem;
  background: #fff;
`;
