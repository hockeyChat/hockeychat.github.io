import styled from "styled-components";
import { shakeAnimation } from "./animation";

export const PageWrap = styled.main`
  padding: 2rem 1rem;
  max-width: 1024px;
  margin: auto;
  text-align: center;
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Logo = styled.img`
  border-radius: 25%;
  height: 80px;
  width: 80px;
  margin: 0 2rem;
  animation-name: ${shakeAnimation};
  animation-duration: .5s;
  animation-iteration-count: infinite;
`;

export const ScrollWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  ${props => props.flex && `
    display: flex;
  `}
`;