import React from "react";
import InsightsCard from "./InsightsCard";
import { useBreakpointValue, Flex } from "@chakra-ui/react";

const CardGrid = ({ cards }) => {
  return (
    <Flex
      data-test="component-card-grid"
      maxWidth="100%"
      style={{
        gap: useBreakpointValue({
          sm: "8px",
          md: "16px",
          lg: "16px",
          xl: "16px",
        }),
      }}
      overflow="auto"
    >
      {cards.map((card, index) => (
        <InsightsCard
          key={card.id}
          onTrack={card.onTrack}
          heading={card.heading}
          body={card.body}
          impactLevel={card.impactLevel}
        />
      ))}
    </Flex>
  );
};

export default CardGrid;
