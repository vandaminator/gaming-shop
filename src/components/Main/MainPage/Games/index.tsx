import { motion } from "framer-motion";
import { Grid, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { storeProps } from "../../../types";
import GameDb from "../../../../utils/data/data";
import { useState } from "react";
import GameItem from "../../Ui/GameItem";

function Games() {
  const gameDb = new GameDb();
  const { listGames, numGames } = gameDb;

  const [shownNum, setShownNum] = useState(10);
  const [currentGames, setCurrntGames] = useState(listGames.slice(0, shownNum));

  const handleMore = () => {
    setShownNum((prev) => prev + 10)
    setCurrntGames(listGames.slice(0, shownNum))
  }

  const Games = currentGames.map((value, index) => {
    return <GameItem game={value} key={index} />;
  });

  return (
    <>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr", xl: "1fr 1fr 1fr" }}
        gap={"30px"}
        my={"20px"}
      >
        {Games}
      </Grid>
      <Button
        as={motion.button}
        display={{base: shownNum < 130 ? 'inline-flex' : "none"}}
        w='full'
        my={"10px"}
        bgColor={"#0c1d2c"}
        color={'white'}
        justifySelf={{ xl: "end" }}
        whileHover={{ color: "#0c1d2c" }}
        whileTap={{ scale: "0.9" }}
        onClick={handleMore}
      >
        More
      </Button>
    </>
  );
}

export default Games;
