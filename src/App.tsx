import GameDb from "./utils/data/data";
import {NavBar} from "./components/componets"
import { Box } from "@chakra-ui/react";

const gameDb = new GameDb()
const game = gameDb.listGames[0]
const gameImg = game.background_image

function App() {
  return <Box>
    <NavBar />
  </Box>;
}

export default App;
