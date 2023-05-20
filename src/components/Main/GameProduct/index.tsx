import { useParams } from "react-router-dom";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import * as Icons from "react-icons/fa";
import GameDb from "../../../utils/data/data";
import Screenshots from "./ScreenshotsComp";
import GameRating from "../Ui/GameRating";

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
      <Flex direction={{ base: "column", xl: "row" }}>
        <Image src={background_image} alt="" mb={"10px"} />
        {screenshots !== "not found" && (
          <Screenshots screenshotsinfo={screenshots} />
        )}
      </Flex>
      <Box my={"20px"} bgColor={"navyBlue"} p={"10px"} borderRadius={"lg"}>
        <Text as="u" fontSize={"3xl"} fontWeight={"bold"}>
          {name}
        </Text>
        <GameRating rating={rating} color={"white"}  />
      </Box>
      <Button
        w="full"
        color={"white"}
        bgColor={"accentBlue"}
        fontWeight={"bold"}
        _hover={{
          color: "black"
        }}
      >
        <Flex align={'center'} fontSize={"lg"}>
          <Text mx={'10px'}>{"R " + price.toString()}</Text>
          <Icons.FaCartArrowDown />
        </Flex>
      </Button>
      <Text my={'20px'}>{description_raw}</Text>
    </Box>
  );
}

export default GameProduct;
