export const createEntriesWithStats = (poolEntries, skaterStats) => {
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
      score: totalScore,
    };
  });
  return pickEntries;
}
