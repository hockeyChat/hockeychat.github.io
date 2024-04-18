export const createEntriesWithStats = (poolEntryIds, skaterStats) => {
  const pickEntries = {};
  const entriesPool = Object.entries(poolEntryIds);
  entriesPool.forEach(([user, team]) => {
    const teamPlayersWithStats = team.map((playerId) => skaterStats[playerId]);
    const totalScore = teamPlayersWithStats.reduce(
      (acc, curr) => Number(acc) + Number(curr.score),
      0
    );
    pickEntries[user] = {
      players: teamPlayersWithStats,
      score: totalScore,
    };
  });
  return pickEntries;
}
