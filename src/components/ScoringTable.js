import React from "react";
import {
  ScoringKey,
  ScoringKeyHeading,
  ScoringSection,
  ScrollWrapper,
} from "styles";

const ScoringTable = () => {
  return (
    <ScrollWrapper>
      <ScoringSection>
        <ScoringKeyHeading>Scoring</ScoringKeyHeading>
        <ScoringKey>
          <dt>Goal:</dt>
          <dd>2</dd>
          <dt>Assist:</dt>
          <dd>1</dd>
          <dt>PIM:</dt>
          <dd>0.5</dd>
          <dt>Shots:</dt>
          <dd>0.1</dd>
          <dt>PPG:</dt>
          <dd>1</dd>
          <dt>PPA:</dt>
          <dd>0.5</dd>
        </ScoringKey>
      </ScoringSection>
    </ScrollWrapper>
  );
};

export default ScoringTable;
