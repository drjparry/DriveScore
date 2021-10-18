import React from "react";
import InsightsCard from "./InsightsCard";

const CardGallery = ({ cards, screenSize }) => {
  return (
    <div data-test="component-card-gallery">
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

export default CardGallery;
