import React from "react";
import InsightsCard from "./InsightsCard";
import { useBreakpointValue, Box, Flex } from "@chakra-ui/react";

const CardGrid = ({ cards }) => {
  return (
    <Flex
      data-test="component-card-grid"
      maxWidth="100%"
      style={{
        overflowX: "scroll",
        gap: useBreakpointValue({
          sm: "8px",
          md: "16px",
          lg: "16px",
          xl: "16px",
        }),
      }}
      overflow="auto"
      flexWrap={useBreakpointValue({
        base: "nowrap",
        sm: "nowrap",
        md: "nowrap",
        lg: "wrap",
        xl: "wrap",
      })}
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
