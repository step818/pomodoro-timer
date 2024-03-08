import "./App.css";

import { Box, Container, Grid, SimpleGrid } from "@chakra-ui/react";

import { useState } from "react";

function App() {
  return (
    <Container centerContent>
      <Box bg="tomato" color="blue" height="300px" w={["30em", "48em", "80em"]}>
        Timer
      </Box>
      <Box bg="gray" color="yellow" height="300px" w={["30em", "48em", "80em"]}>
        TaskList
      </Box>
    </Container>
  );
}

export default App;
