import React from "react";
import styled from "styled-components";

const TeamSection = styled.section`
  padding: 2rem;
  &:not(:last-child) {
    border-bottom: 2px solid #1a261a;
  }
`;
const ScrollWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
`;
const TeamHeading = styled.h2`
  margin-top: 0;
  padding-top: 0;
`;
const StyledTable = styled.table`
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
const PlayerName = styled.td`
  text-align: left;
  font-weight: bold;
`;
const Score = styled.td`
  font-weight: bold;
`;

const StatTable = ({ user, team }) => {
  return (
    <TeamSection key={user}>
      <TeamHeading>
        {user}: {team.score}
      </TeamHeading>
      <ScrollWrapper>
        <StyledTable>
          <thead>
            <tr>
              <th>Player</th>
              <th>Score</th>
              <th>Team</th>
              <th>Pos.</th>
              <th>GP</th>
              <th>G</th>
              <th>A</th>
              <th>PIM</th>
              <th>Shots</th>
              <th>PPG</th>
              <th>PPA</th>
            </tr>
          </thead>
          <tbody>
            {team.players
              .sort((playerA, playerB) => playerA.score > playerB.score)
              .map((player) => {
                const {
                  id,
                  name,
                  team,
                  position,
                  games,
                  goals,
                  assists,
                  pim,
                  shots,
                  powerPlayGoals,
                  powerPlayPoints,
                  score,
                } = player;

                return (
                  <tr key={id}>
                    <PlayerName>{name}</PlayerName>
                    <Score>{score.toFixed(1)}</Score>
                    <td>{team}</td>
                    <td>{position}</td>
                    <td>{games || 0}</td>
                    <td>{goals || 0}</td>
                    <td>{assists || 0}</td>
                    <td>{pim || 0}</td>
                    <td>{shots || 0}</td>
                    <td>{powerPlayGoals || 0}</td>
                    <td>{powerPlayPoints - powerPlayGoals || 0}</td>
                  </tr>
                );
              })}
          </tbody>
        </StyledTable>
      </ScrollWrapper>
    </TeamSection>
  );
};

export default StatTable;
