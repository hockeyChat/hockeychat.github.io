import React, { useEffect, useState } from "react";
import { MainPage } from "components";
import { createEntriesWithStats, createSkaterStats } from "utils";
import picks from "data/picks.json";

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
    if (statData.length) {
      const statsById = createSkaterStats(allPlayerIds, allPlayers, statData);
      if (!Object.keys(skaterStats).length) {
        setSkaterStats(statsById);
      }
    }
  }, [allPlayerIds, allPlayers, skaterStats, statData]);

  useEffect(() => {
    if (Object.keys(skaterStats).length) {
      const pickEntries = createEntriesWithStats(poolEntries, skaterStats)
      if (!Object.keys(entriesWithStats).length) {
        setEntriesWithStats(pickEntries);
      }
    }
  }, [entriesWithStats, poolEntries, skaterStats]);

  return (
    <MainPage entriesWithStats={entriesWithStats} />
  );
}

export default App;
