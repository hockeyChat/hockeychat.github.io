import styled from "styled-components";

export const TeamHeading = styled.h2`
  margin-top: 0;
  padding-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TeamSection = styled.section`
  padding: 2rem 0;
  border-bottom: 2px solid #1a261a;
  &:last-child {
    border: 0;
    ${TeamHeading} {
      &:before,
      &:after {
        content: url("data:image/png;base64,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");
        margin: 0 1rem;
      }
    }
  }
  &:first-child ${TeamHeading} {
    &:before,
    &:after {
      content: "🏆";
      margin: 0 1rem;
    }
  }
  &:nth-child(2) ${TeamHeading} {
    &:before,
    &:after {
      content: "🥈";
      margin: 0 1rem;
    }
  }
`;

export const StyledTable = styled.table`
  border-spacing: 0;
  min-width: 100%;
  th,
  td {
    padding: 0.25rem 1rem;
    vertical-align: middle;
    &:first-child {
      width: 200px;
    }
  }
  thead {
    background-color: #224723;
    border-bottom: 1px solid #1a261a;
    color: #fff;
  }
  tbody tr:nth-child(2n + 2) {
    background-color: #d9ded9;
  }
`;

export const PlayerName = styled.td`
  text-align: left;
  font-weight: bold;
`;

export const Score = styled.td`
  font-weight: bold;
`;