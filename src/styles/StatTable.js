import styled from "styled-components";

export const TeamSection = styled.section`
  padding: 2rem 0;
  &:not(:last-child) {
    border-bottom: 2px solid #1a261a;
  }
`;

export const TeamHeading = styled.h2`
  margin-top: 0;
  padding-top: 0;
`;

export const StyledTable = styled.table`
  border-spacing: 0;
  width: 100%;
  th,
  td {
    padding: 0.25rem 1rem;
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