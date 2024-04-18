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
              {/* <th>PIM</th> */}
              <th>Shots</th>
              {/* <th>PPG</th>
              <th>PPA</th> */}
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
                  skaterFullName,
                  teamAbbrevs,
                  positionCode,
                  gamesPlayed,
                  goals,
                  assists,
                  // penaltyMinutes,
                  shots,
                  // ppGoals,
                  // ppPoints,
                  score,
                } = player;

                return (
                  <tr key={id}>
                    <PlayerName>{skaterFullName}</PlayerName>
                    <Score>{score.toFixed(1)}</Score>
                    <td>{teamAbbrevs}</td>
                    <td>{positionCode}</td>
                    <td>{gamesPlayed || 0}</td>
                    <td>{goals || 0}</td>
                    <td>{assists || 0}</td>
                    {/* <td>{penaltyMinutes || 0}</td> */}
                    <td>{shots || 0}</td>
                    {/* <td>{ppGoals || 0}</td>
                    <td>{ppPoints - ppGoals || 0}</td> */}
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
