export const calculatePoints = (skaterStats) => {
  if (skaterStats && Object.keys(skaterStats).length) {
    const { goals, assists, pim, powerPlayGoals, powerPlayPoints, shots } =
      skaterStats;
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
