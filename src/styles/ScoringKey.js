import styled from "styled-components";

export const ScoringSection = styled.section`
  margin: 2rem auto;
`;

export const ScoringKeyHeading = styled.h4`
  background-color: #224723;
  box-sizing: border-box;
  color: #fff;
  margin: 0;
  padding: 0.25rem 0.5rem;
  width: 100%;
  height: 1.65rem;
  span {
    position: absolute;
    left: calc(50vw - 2.3rem);
  }
`;

export const ScoringKeyList = styled.dl`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: 0;
  dt,
  dd {
    padding: 0.25rem 0.5rem;
    border: solid #d9ded9;
    border-width: 0 1px 1px;
  }
  dt {
    background-color: #d9ded9;
  }
  dd {
    margin: 0;
  }
`;
