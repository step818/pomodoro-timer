import "./App.css";

import { Box, Container, Grid, SimpleGrid } from "@chakra-ui/react";

import Timer from "./components/Timer";
import { useState } from "react";

function App() {
  return (
    <Container centerContent>
      <Box bg="tomato" color="blue" height="300px" w={["25em", "30em", "70em"]}>
        <Timer />
      </Box>
      <Box bg="gray" color="yellow" height="300px" w={["20em", "38em", "70em"]}>
        TaskList
      </Box>
    </Container>
  );
}

export default App;
