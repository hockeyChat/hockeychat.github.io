export const calculatePoints = (skaterStats) => {
  if (skaterStats && Object.keys(skaterStats).length) {
    const {
      goals = 0,
      assists = 0,
      pim = 0,
      powerPlayGoals = 0,
      powerPlayPoints = 0,
      shots = 0,
    } = skaterStats;
    const points =
      goals * 2 +
      assists +
      pim * 0.5 +
      shots * 0.1 +
      powerPlayGoals +
      (powerPlayPoints - powerPlayGoals) * 0.5;
    return points;
  }
  return 0;
};
