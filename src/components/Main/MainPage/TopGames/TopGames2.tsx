import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../../../types";
import TopNavigation from "./TopNavigation";
import TopInfo from "./TopInfo";
import { useEffect, useState } from "react";
import { changeTopNum } from "../../../../features/system/systemSlice";
import GameDb from "../../../../utils/data/data";

function TopGames2() {
  const topgames = useSelector((state: storeProps) => state.gameDb.topGames);
  let current = useSelector((state: storeProps) => state.system.topGameNum);
  const gameDb = new GameDb();
  let game = topgames[current];

  const {
    name,
    background_image: bgImage,
    rating,
    ratings: ratingList,
    id,
  } = game;

  const gameInfo = {
    name: name,
    bgImage: bgImage,
    rating: rating,
    ratingList: ratingList,
    id: id,
    screenShoots: gameDb.screenShots[id.toString()].results.slice(0, 6),
  };

  const [currentBg, setCurrentBg] = useState(bgImage);
  const [currentGameInfo, setCurrentGameInfo] = useState(gameInfo);
  const [currentGameNum, setCurrentGameNum] = useState(current);
  const [change, setChange] = useState(0);

  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(changeTopNum("back"));
    setCurrentGameNum(current)
    setChange(change - 1);
  };

  const handleNext = () => {
    dispatch(changeTopNum("next"));
    setCurrentGameNum(current)
    setChange(change + 1);
  };

  useEffect(() => {
    console.log(current)
    const game = topgames[currentGameNum];
    const {
      name,
      background_image: bgImage,
      rating,
      ratings: ratingList,
      id,
    } = game;

    const gameInfo = {
      name: name,
      bgImage: bgImage,
      rating: rating,
      ratingList: ratingList,
      id: id,
      screenShoots: gameDb.screenShots[id.toString()].results.slice(0, 6),
    };

    setCurrentGameInfo(gameInfo);
    setCurrentBg(bgImage);
  }, [change]);

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
          borderTopRadius={{ base: "md", xl: "0" }}
          borderRightRadius={{ base: "0", xl: "md" }}
        />
        <Flex
          w={{ base: "100%", xl: "30%" }}
          direction={"column"}
          p={"10px"}
          borderBottomRadius={"md"}
          justify={{ xl: "space-between" }}
        >
          <TopInfo
            changeImg={setCurrentBg}
            name={currentGameInfo.name}
            rating={currentGameInfo.rating}
            ratings={currentGameInfo.ratingList}
            screenShots={currentGameInfo.screenShoots}
          />
          <TopNavigation
            current={currentGameNum}
            nextFunc={handleNext}
            backFunc={handleBack}
          />
        </Flex>
      </Box>
    </>
  );
}

export default TopGames2;
