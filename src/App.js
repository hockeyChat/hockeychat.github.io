import React, { useEffect, useState } from "react";
import { MainPage } from "components";
import { createEntriesWithStats, createSkaterStats } from "utils";
import picks from "data/picks2024.json";

function App() {
  const [bracketData, setBracketData] = useState([]);
  const [entriesWithStats, setEntriesWithStats] = useState({});
  const [playerIds, setPlayerIds] = useState({});
  const [skaterStats, setSkaterStats] = useState({});
  const [statData, setStatData] = useState([]);

  useEffect(() => {
    const uniquePlayerIds = [];
    Object.values(picks).forEach((ids) => {
      ids.forEach((id) => {
        if (!uniquePlayerIds.includes(id)) {
          uniquePlayerIds.push(id);
        }
      });
    });
    setPlayerIds(uniquePlayerIds);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch(
      '/api/statBracket',
      {
        headers: new Headers({
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
        }),
      }
    )
      .then(async (response) => {
        const json = await response.json()
        return {stats: json.stats.data, bracket: json.bracket.series};
      })
      .then((res) => {
        setBracketData(res.bracket);
        setStatData(res.stats);
      });
  }, []);

  useEffect(() => {
    if (statData.length) {
      const statsById = createSkaterStats(playerIds, statData);
      if (!Object.keys(skaterStats).length) {
        setSkaterStats(statsById);
      }
    }
  }, [playerIds, skaterStats, statData]);

  useEffect(() => {
    if (Object.keys(skaterStats).length) {
      const pickEntries = createEntriesWithStats(picks, skaterStats);
      if (!Object.keys(entriesWithStats).length) {
        setEntriesWithStats(pickEntries);
      }
    }
  }, [entriesWithStats, skaterStats]);

  return <MainPage bracketData={bracketData} entriesWithStats={entriesWithStats} />;
}

export default App;
