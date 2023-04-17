import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import StatTable from "./components/StatTable";
import logo from "./assets/logo.jpg";
import { calculatePoints } from "./utils/calculatePoints";
import picks from "./data/picks.json";

const PageWrap = styled.main`
  padding: 2rem;
  max-width: 1024px;
  margin: auto;
  text-align: center;
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const shakeAnimation = keyframes`
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
const Logo = styled.img`
  border-radius: 25%;
  height: 80px;
  width: 80px;
  margin: 0 2rem;
  animation-name: ${shakeAnimation};
  animation-duration: .5s;
  animation-iteration-count: infinite;
`;

function App() {
  const [statData, setStatData] = useState([]);
  const [entriesWithStats, setEntriesWithStats] = useState({});
  const [skaterStats, setSkaterStats] = useState({});
  const { poolEntries } = picks;

  const allPlayers = Object.values(poolEntries)
    .map((entry) => entry.players)
    .flat();
  const allPlayerIds = allPlayers.map((player) => player.id);

  useEffect(() => {
    if (!statData.length) {
      const queries = allPlayerIds.map((playerId) =>
        fetch(
          `https://statsapi.web.nhl.com/api/v1/people/${playerId}/stats?stats=statsSingleSeasonPlayoffs&season=20222023`
        )
      );
      Promise.all(queries).then((responses) =>
        Promise.all(responses.map((value) => value.json())).then((data) => {
          setStatData(data);
        })
      );
    }
  }, [allPlayerIds, statData]);

  useEffect(() => {
    const statsById = {};
    if (statData.length) {
      allPlayerIds.forEach((playerId, i) => {
        const playerData = allPlayers.find((player) => player.id === playerId);
        const { id, name, position, team } = playerData;
        const seasonStats = { ...statData[i].stats[0].splits[0]?.stat };
        statsById[playerId] = {
          ...seasonStats,
          id,
          name,
          position,
          team,
          score: calculatePoints(seasonStats),
        };
      });
      if (!Object.keys(skaterStats).length) {
        setSkaterStats(statsById);
      }
    }
  }, [allPlayerIds, allPlayers, skaterStats, statData]);

  useEffect(() => {
    if (Object.keys(skaterStats).length) {
      const pickEntries = {};
      const entriesPool = Object.entries(poolEntries);
      entriesPool.forEach(([user, team]) => {
        const teamPlayersWithStats = team.players.map((p) => skaterStats[p.id]);
        const totalScore = teamPlayersWithStats.reduce(
          (acc, curr) => Number(acc) + Number(curr.score),
          0
        );
        pickEntries[user] = {
          players: teamPlayersWithStats,
          score: totalScore.toFixed(1),
        };
      });
      if (!Object.keys(entriesWithStats).length) {
        setEntriesWithStats(pickEntries);
      }
    }
  }, [entriesWithStats, poolEntries, skaterStats]);

  return (
    <PageWrap className="App">
      <h1>
        <Logo src={logo} alt="" />
        Hockey Chat Playoff Pool
        <Logo src={logo} alt="" />
      </h1>
      {Object.entries(entriesWithStats).length > 0 &&
        Object.entries(entriesWithStats)
          .sort(([_userA, teamA], [_userB, teamB]) => {
            if (teamA.score < teamB.score) {
              return 1;
            }
            if (teamA.score > teamB.score) {
              return -1;
            }
            return 0;
          })
          .map(([user, team]) => {
            return <StatTable user={user} team={team} key={user} />;
          })}
    </PageWrap>
  );
}

export default App;
