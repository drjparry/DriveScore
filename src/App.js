import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { Box } from "@chakra-ui/react";
import { theme } from "./theme";
import CardGrid from "./components/CardGrid";

const InsightsComponent = () => {
  const cards = [
    {
      onTrack: true,
      heading: "Public information",
      body: " Bankruptcies and individual voluntary arrangements can damage your score",
      impactLevel: "high",
      id: "erfewrfre",
    },
    {
      onTrack: false,
      heading: "Credit utilisation",
      body: "Using more than 50% of your available credit can damage your score",
      impactLevel: "medium",
      id: "dfdfedddwrfer",
    },
    {
      onTrack: false,
      heading: "Electoral roll",
      body: "Being on the electoral roll can improve your score",
      impactLevel: "medium",
      id: "dfdddddaaafewrfer",
    },
  ];

  return (
    <Box bg="#F7F7F8">
      <Box style={{ fontSize: "20px", fontWeight: "bold" }}>Insights</Box>
      <CardGrid cards={cards} />;
    </Box>
  );
};

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <InsightsComponent />
      </div>
    </ChakraProvider>
  );
}

export default App;
