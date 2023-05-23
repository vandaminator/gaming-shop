import { useParams } from "react-router-dom";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import * as Icons from "react-icons/fa";
import GameDb from "../../../utils/data/data";
import Screenshots from "./ScreenshotsComp";
import GameRating from "../Ui/GameRating";
import BuyButton from "../Ui/BuyButton";
import GameInfo from "./GameInfo";
import GameProps from "./GameProps";
import GamesList from "../Ui/GamesList";
import { useState } from "react";

function GameProduct() {
  const id = useParams().id;
  const gameDb = new GameDb();
  if (id === undefined) return <div></div>;

  const game = gameDb.showData(id);
  if (game === "not found") return <div className=""></div>;

  const {
    name,
    background_image,
    price,
    genres,
    tags,
    description_raw,
    rating,
    ratings,
  } = game;

  const similarGames = gameDb.showSimilar(id, 6);
  const screenshots = gameDb.showScreenshots(id);
  
  const [bgImg, setBgImage] = useState(background_image)

  return (
    <Box>
      <Flex direction={{ base: "column", xl: "row-reverse" }}>
        <Image src={bgImg} alt="" mb={"10px"} w={{xl: "80%"}}/>
        {screenshots !== "not found" && (
          <Screenshots screenshotsinfo={screenshots}/>
        )}
      </Flex>
      <GameInfo rating={rating} ratings={ratings} name={name} />
      <BuyButton price={price} />
      <Text my={"20px"}>{description_raw}</Text>
      <GameProps genres={genres} tags={tags} />
      {similarGames !== "not found" && (
        <>
          <Text
            my={"20px"}
            fontWeight={"bold"}
            color={"white"}
            fontSize={"2xl"}
          >
            Similar Games
          </Text>
          <GamesList listGames={similarGames} />
        </>
      )}
    </Box>
  );
}

export default GameProduct;
