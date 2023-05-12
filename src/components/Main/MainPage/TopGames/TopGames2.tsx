import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { storeProps } from "../../../types";
import TopNavigation from "./TopNavigation";
import TopInfo from "./TopInfo";
import { useState } from "react";

function TopGames2() {
  const topgames = useSelector((state: storeProps) => state.gameDb.topGames);
  const current = useSelector((state: storeProps) => state.system.topGameNum);
  const gameDb = useSelector((state: storeProps) => state.gameDb.data)
  let game = topgames[current];

  const { name, background_image: bgImage, rating, ratings: ratingList, id } = game;
  const screenShoots = gameDb.screenShots[id.toString()].results.slice(0, 6)

  const [currentBg, setCurrentBg] = useState(bgImage)
  return (
    <>
      <Box
        bgColor={"navyBlue"}
        borderRadius={"md"}
        display={{ xl: "flex" }}
        flexDirection={"row-reverse"}
      >
        <Image
          src={currentBg}
          w={{ base: "100%", xl: "70%" }}
          borderTopRadius={{base: "md", xl: "0"}}
          borderRightRadius={{base: "0", xl: "md"}}
        />
        <Flex
          w={{ base: "100%", xl: "30%" }}
          direction={"column"}
          p={"10px"}
          borderBottomRadius={"md"}
          justify={{xl: "space-between"}}
        >
          <TopInfo changeImg={setCurrentBg} name={name} rating={rating} ratings={ratingList} screenShots={screenShoots} />
          <TopNavigation
            current={current}
            nextFunc={() => {}}
            backFunc={() => {}}
          />
        </Flex>
      </Box>
    </>
  );
}

export default TopGames2;
