import { keyframes } from "styled-components";

export const shakeAnimation = keyframes`
  0%  { -webkit-transform: translate(2px, 1px) rotate(0deg); }
  10% { -webkit-transform: translate(-1px, -2px) rotate(-2deg); }
  20% { -webkit-transform: translate(-3px, 0px) rotate(3deg); }
  30% { -webkit-transform: translate(0px, 2px) rotate(0deg); }
  40% { -webkit-transform: translate(1px, -1px) rotate(1deg); }
  50% { -webkit-transform: translate(-1px, 2px) rotate(-1deg); }
  60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); }
  70% { -webkit-transform: translate(2px, 1px) rotate(-2deg); }
  80% { -webkit-transform: translate(-1px, -1px) rotate(4deg); }
  90% { -webkit-transform: translate(2px, 2px) rotate(0deg); }
  100%{ -webkit-transform: translate(1px, -2px) rotate(-1deg); }
`;
