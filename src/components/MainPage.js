import React from "react";
import { ScoringKey, StatTable } from "components";
import { Logo, PageWrap } from "styles";
import logo from "assets/logo.jpg";

const MainPage = ({ entriesWithStats }) => {
  return (
    <PageWrap className="App">
      <h1>
        <Logo src={logo} alt="" />
        Hockey Chat Playoff Pool
        <Logo src={logo} alt="" />
      </h1>
      <ScoringKey />
      <div>
        {Object.entries(entriesWithStats).length > 0 &&
          Object.entries(entriesWithStats)
            .sort(([_userA, teamA], [_userB, teamB]) => {
              if (teamA.score < teamB.score) {
                return 1;
              }
              if (teamA.score > teamB.score) {
                return -1;
              }
              return 0;
            })
            .map(([user, team]) => {
              return <StatTable user={user} team={team} key={user} />;
            })}
      </div>
    </PageWrap>
  );
};

export default MainPage;
