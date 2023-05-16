import { Box } from "@chakra-ui/react";
import Games from "./Games";
import TopGames2 from "./TopGames/TopGames2";

function MainPage() {
  return (
    <Box> 
      <TopGames2 />
      <Games />
    </Box>
  );
}

export default MainPage;
