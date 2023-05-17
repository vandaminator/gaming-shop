import { useParams } from "react-router-dom";
import GameDb from "../../../utils/data/data";
import { Box, Flex, Text } from "@chakra-ui/react";
import Screenshots from "./Screenshots";

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

  const screenshots = gameDb.showScreenshots(id);

  return (
    <Box>
      <Flex>
        {screenshots !== "not found" && (
          <Screenshots screenshotsinfo={screenshots} />
        )}
      </Flex>
      <Text></Text>
    </Box>
  );
}

export default GameProduct;
