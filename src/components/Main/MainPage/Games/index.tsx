import { Grid } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { storeProps } from "../../../types";
import GameDb from "../../../../utils/data/data";
import { useState } from "react";
import GameItem from "../../Ui/GameItem";

function Games() {
  const gameDb = new GameDb();
  const { listGames, numGames } = gameDb;

  const [shownNum, setShownNum] = useState(10)
  const [currentGames, setCurrntGames] = useState(listGames.slice(0, shownNum))

  const Games = currentGames.map((value, index) => {
    return <GameItem game={value} key={index} />
  })

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "1fr 1fr", xl: "1fr 1fr 1fr" }}
      gap={'30px'}
      my={'20px'}
    >{Games}</Grid>
  );
}

export default Games;
