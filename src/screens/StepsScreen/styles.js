import styled from "styled-components";
import { FontWeight } from "constants/index";

export const Container = styled.div`
  width: 100%;
  padding-top: 5vh;
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
`;
