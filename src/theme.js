import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  base: "0px",
  sm: "375px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "2000px",
});

export const theme = extendTheme({ breakpoints });
