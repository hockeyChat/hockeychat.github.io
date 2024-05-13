export const getEliminatedTeams = (bracketData) => {
  let eliminatedTeams = []
  bracketData.forEach(series => {
    const {bottomSeedTeam, topSeedTeam, winningTeamId} = series;
    if(winningTeamId !== 0 && bottomSeedTeam.id === winningTeamId) {
      eliminatedTeams.push(topSeedTeam.abbrev)
    } else if (winningTeamId !== 0) {
      eliminatedTeams.push(bottomSeedTeam.abbrev);
    }
  })
  return eliminatedTeams;
}