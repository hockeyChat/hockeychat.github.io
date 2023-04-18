import { calculatePoints } from "./calculatePoints";

export const createSkaterStats = (playerIds, allPlayers, statData) => {
  const statsById = {};
  playerIds.forEach((playerId, i) => {
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
  return statsById;
};
