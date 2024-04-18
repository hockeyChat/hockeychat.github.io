import { calculatePoints } from "./calculatePoints";

export const createSkaterStats = (playerIds, statData) => {
  const statsById = {};
  playerIds.forEach((playerId, i) => {
    const playerData = statData.find((player) => player.playerId === playerId);
    statsById[playerId] = {
      ...playerData,
      score: calculatePoints(playerData),
    };
  });
  return statsById;
};
