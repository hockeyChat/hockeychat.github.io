import React from "react";
import {
  ScoringKeyList,
  ScoringKeyHeading,
  ScoringSection,
  ScrollWrapper,
} from "styles";

const ScoringKey = () => {
  return (
    <ScrollWrapper flex>
      <ScoringSection>
        <ScoringKeyHeading><span>
          Scoring
          </span>
          </ScoringKeyHeading>
        <ScoringKeyList>
          <dt>Goal:</dt>
          <dd>2</dd>
          <dt>Assist:</dt>
          <dd>1</dd>
          <dt>Shots:</dt>
          <dd>0.1</dd>
        </ScoringKeyList>
      </ScoringSection>
    </ScrollWrapper>
  );
};

export default ScoringKey;
