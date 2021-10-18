import React from "react";
import InsightsCard from "./InsightsCard";

const CardGrid = ({ cards, screenSize }) => {
  return (
    <div data-test="component-card-grid">
      {cards.map((card, index) => (
        <div key={card.id}>
          <InsightsCard
            onTrack={card.onTrack}
            heading={card.heading}
            body={card.body}
            impactLevel={card.impactLevel}
            screenSize={screenSize}
          />
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
