import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StatTable from "./components/StatTable";
import { calculatePoints } from "./utils/calculatePoints";
import picks from "./picks.json";

const PageWrap = styled.main`
  padding: 2rem;
  max-width: 1024px;
  margin: auto;
  text-align: center;
`;

function App() {
  const [statData, setStatData] = useState([]);
  const [entriesWithStats, setEntriesWithStats] = useState({});
  const [skaterStats, setSkaterStats] = useState({});
  const [statsLoaded, setStatsLoaded] = useState(false);
  const [statsSet, setStatsSet] = useState(false);
  const { poolEntries } = picks;

  const allPlayers = Object.values(poolEntries)
    .map((entry) => entry.players)
    .flat();
  const allPlayerIds = allPlayers.map((player) => player.id);

  useEffect(() => {
    if (!statData.length) {
      const queries = allPlayerIds.map((playerId) =>
        fetch(
          `https://statsapi.web.nhl.com/api/v1/people/${playerId}/stats?stats=statsSingleSeason&season=20222023&expand=person.name`
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
        const seasonStats = { ...statData[i].stats[0].splits[0].stat };
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
          (acc, curr) => 
            Math.round(acc + curr.score),
          0
        );
        pickEntries[user] = {
          players: teamPlayersWithStats,
          score: totalScore,
        };
      });
      if (!Object.keys(entriesWithStats).length) {
        setEntriesWithStats(pickEntries);
      }
    }
  }, [entriesWithStats, poolEntries, skaterStats]);

  return (
    <PageWrap className="App">
      <h1>Hockey Chat Playoff Pool</h1>
      {Object.entries(entriesWithStats).length > 0 &&
        Object.entries(entriesWithStats)
          .sort(([_userA, teamA], [_userB, teamB]) => teamA.score > teamB.score)
          .map(([user, team]) => {
            return <StatTable user={user} team={team} key={user} />;
          })}
    </PageWrap>
  );
}

export default App;
