import React, { useState } from "react";
import {
  PlayerName,
  Score,
  ScoreSection,
  ScrollWrapper,
  StyledTable,
  TeamHeading,
  TeamSection,
} from "../styles";

const StatTable = ({ user, team }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => setIsOpen(!isOpen);
  return (
    <TeamSection key={user} isOpen={isOpen}>
      <TeamHeading onClick={handleOpen} type="button">
        <h2>
          {user}: {team.score.toFixed(1)}
        </h2>
      </TeamHeading>
      <ScoreSection isOpen={isOpen}>
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
                .map((player, i) => {
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
                    <tr key={`${id}-${i}`}>
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
      </ScoreSection>
    </TeamSection>
  );
};

export default StatTable;
