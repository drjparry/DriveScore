import React from "react";
import ImpactPill from "./ImpactPill";
import TrackPill from "./TrackPill";
import Heading from "./Heading";
import Text from "./Text";
import { Box, HStack, Flex } from "@chakra-ui/react";

const InsightsCard = ({ onTrack, heading, body, impactLevel }) => {
  return (
    <Box
      bg="white"
      flex={1}
      data-test="component-insights-card"
      maxWidth="lg"
      p={{ sm: "16px", md: "24px", lg: "24px", xl: "24px" }}
    >
      <Flex direction="column" height="100%">
        <HStack pb="24px">
          <TrackPill onTrack={onTrack} />
          <Box
            data-test="impact-pill-top"
            display={{ sm: "none", md: "none", lg: "block", xl: "block" }}
          >
            <ImpactPill impactLevel={impactLevel} />
          </Box>
        </HStack>
        <Heading text={heading} size="20px" />
        <Text text={body} />
        <Box
          pt="24px"
          data-test="impact-pill-bottom"
          display={{ lg: "none", xl: "none" }}
        >
          <ImpactPill impactLevel={impactLevel} />
        </Box>
      </Flex>
    </Box>
  );
};

export default InsightsCard;
