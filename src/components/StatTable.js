import React from "react";
import styled from "styled-components";

const TeamSection = styled.section`
  border-bottom: 2px solid #1a261a;
  padding: 2rem;
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
  text-align: right;
  font-weight: bold;
`;

const StatTable = ({ user, team }) => {
  return (
    <TeamSection key={user}>
      <TeamHeading>
        {user}: {team.score}
      </TeamHeading>
      <StyledTable>
        <thead>
          <tr>
            <th>Player</th>
            <th>Pos.</th>
            <th>Team</th>
            <th>GP</th>
            <th>G</th>
            <th>A</th>
            <th>PIM</th>
            <th>Shots</th>
            <th>PPG</th>
            <th>PPA</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {team.players
          .sort((playerA, playerB) => playerA.score > playerB.score).map((player) => {
            const {
              id,
              name,
              position,
              team,
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
                <td>{position}</td>
                <td>{team}</td>
                <td>{games || 0}</td>
                <td>{goals || 0}</td>
                <td>{assists || 0}</td>
                <td>{pim || 0}</td>
                <td>{shots || 0}</td>
                <td>{powerPlayGoals || 0}</td>
                <td>{powerPlayPoints - powerPlayGoals || 0}</td>
                <Score>
                  {score.toFixed(1)}
                </Score>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </TeamSection>
  );
};

export default StatTable;
