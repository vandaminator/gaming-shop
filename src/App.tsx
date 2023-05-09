import GameDb from "./utils/data/data";
import { NavBar, Main } from "./components/componets";
import { Box } from "@chakra-ui/react";

const gameDb = new GameDb();
const game = gameDb.listGames[0];
const gameImg = game.background_image;
const topgames = gameDb.showTopGames(2);

function App() {
  return (
    <Box>
      <NavBar />
      <Main />
    </Box>
  );
}

export default App;
