import { Box } from "@chakra-ui/react";
import TopGames2 from "./TopGames/TopGames2";
import GamesList from "../Ui/GamesList";
import GameDb from "../../../utils/data/data";

function MainPage() {
  const gameDb = new GameDb();
  const { listGames } = gameDb;
  return (
    <Box>
      <TopGames2 />
      <GamesList listGames={listGames} />
    </Box>
  );
}

export default MainPage;
