import React from "react";
import ImpactPill from "./ImpactPill";
import TrackPill from "./TrackPill";
import Heading from "./Heading";
import Text from "./Text";

const InsightsCard = ({ onTrack, heading, body, impactLevel, screenSize }) => {
  return (
    <div data-test="component-insights-card">
      <span>
        <TrackPill onTrack={onTrack} />
        {screenSize === "large" && (
          <span data-test="impact-pill-top">
            <ImpactPill impactLevel={impactLevel} />
          </span>
        )}
      </span>
      <Heading text={heading} size="20px" />
      <Text text={body} />
      {screenSize !== "large" && (
        <div data-test="impact-pill-bottom">
          <ImpactPill impactLevel={impactLevel} />
        </div>
      )}
    </div>
  );
};

export default InsightsCard;
