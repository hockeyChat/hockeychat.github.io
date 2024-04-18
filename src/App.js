import React, { useEffect, useState } from "react";
import { MainPage } from "components";
import { createEntriesWithStats, createSkaterStats } from "utils";
import picks from "data/picks2024.json";

function App() {
  const [statData, setStatData] = useState([]);
  const [entriesWithStats, setEntriesWithStats] = useState({});
  const [skaterStats, setSkaterStats] = useState({});
  const [playerIds, setPlayerIds] = useState({});

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
      `/stats/rest/en/skater/summary?isAggregate=false&isGame=falsesort=%5B%7B%22property%22:%22points%22,%22direction%22:%22DESC%22%7D&cayenneExp=gameTypeId=3%20and%20seasonId=20232024&limit=-1`,
      {
        headers: new Headers({
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
        }),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        setStatData(res.data);
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

  return <MainPage entriesWithStats={entriesWithStats} />;
}

export default App;
