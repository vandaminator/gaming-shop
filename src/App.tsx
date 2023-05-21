import GameDb from "./utils/data/data";
import { NavBar, Main } from "./components/componets";
import { Box, Grid } from "@chakra-ui/react";

const gameDb = new GameDb()
const games = gameDb.searchGames('', {})

function App() {
  return (
    <Box>
      <NavBar />
      <Main />
    </Box>
  );
}

export default App;
