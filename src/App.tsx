import GameDb from "./utils/data/data";
import { NavBar, Main } from "./components/componets";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box>
      <NavBar />
      <Main />
    </Box>
  );
}

export default App;
