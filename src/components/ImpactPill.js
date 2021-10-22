import React from "react";
import { Box } from "@chakra-ui/react";

const style = {
  fontSize: "12px",
  fontWeight: "normal",
  lineHeight: "20px",
  textAlign: "center",
  borderRadius: "4px",
  padding: "0px 4px",
  letterSpacing: "0.4px",
  backgroundColor: "#EEEFF1",
};

const ImpactPill = ({ impactLevel }) => {
  const text = `${impactLevel.toUpperCase()} IMPACT`;

  return (
    <Box style={style} data-test="impact-pill">
      {text}
    </Box>
  );
};

export default ImpactPill;
