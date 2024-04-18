export const calculatePoints = (skaterStats) => {
  if (skaterStats && Object.keys(skaterStats).length) {
    const {
      goals = 0,
      assists = 0,
      shots = 0,
      // penaltyMinutes = 0,
      // ppGoals = 0,
      // ppPoints = 0,
    } = skaterStats;
    const points =
      goals * 2 +
      assists +
      shots * 0.1 
      // penaltyMinutes * 0.5 +
      // ppGoals +
      // (ppPoints - ppGoals) * 0.5;
      
    return points;
  }
  return 0;
};
