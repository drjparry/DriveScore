import React from "react";
import { Box } from "@chakra-ui/react";

const style = {
  color: "rgb(116, 127, 138)",
  fontSize: "14px",
  fontWeight: "normal",
  lineHeight: "20px",
};

const Text = ({ size, text }) => {
  return (
    <Box flex={1} style={style} data-test="text">
      {text}
    </Box>
  );
};

export default Text;
