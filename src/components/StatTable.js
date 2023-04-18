import React from "react";
import {
  PlayerName,
  Score,
  ScrollWrapper,
  StyledTable,
  TeamHeading,
  TeamSection,
} from "../styles";

const StatTable = ({ user, team }) => {
  return (
    <TeamSection key={user}>
      <TeamHeading>
        {user}: {team.score.toFixed(1)}
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
              .sort((playerA, playerB) => {
                if (playerA.score < playerB.score) {
                  return 1;
                }
                if (playerA.score > playerB.score) {
                  return -1;
                }
                return 0;
              })
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
