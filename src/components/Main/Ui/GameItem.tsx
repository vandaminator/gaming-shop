import { useState } from "react";
import {
  Box,
  Icon,
  IconButton,
  Image,
  Text,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { Result } from "../../../utils/data/objects/types/GameListTypes";
import { ArrowLeft, ArrowRight } from "react-feather";

export interface GameItemProps {
  game: Result;
}

function GameItem({ game }: GameItemProps) {
  const { name, price, short_screenshots } = game;

  const images = short_screenshots.map((value) => value.image);
  const screenshoots = images.slice(0, 5);

  const [currentNum, setCurrentNum] = useState(0);
  const [bgImage, setBgImage] = useState(screenshoots[0]);

  const handleNumChange = (way: "next" | "back") => {
    const isFirst = currentNum === 0;
    const isLast = currentNum === 4;
    if (way === "next") {
      if (isLast) setCurrentNum(0);
      else setCurrentNum(currentNum + 1);
      setBgImage(screenshoots[currentNum])
    }
    if (way === "back") {
      if (isFirst) setCurrentNum(4);
      else setCurrentNum(currentNum - 1);
      setBgImage(screenshoots[currentNum])
    }
    
  };

  const pics = screenshoots.map((value, index) => {
    const isCurrentImg = index === currentNum;
    return (
      <Box
        w={"10px"}
        h={"10px"}
        borderRadius={"full"}
        bgColor={isCurrentImg ? "accentBlue" : "lightOrange"}
        onClick={() => {
          setBgImage(value);
          setCurrentNum(index);
        }}
        key={index}
      />
    );
  });

  return (
    <Box bgColor={"navyBlue"}>
      <Image src={bgImage} w="full" h={"200px"} />
      <Box p={"10px"}>
        <Flex justify={"space-between"}>
          <IconButton
            aria-label="back Image button"
            children={<ArrowLeft size={"18px"} />}
            w={"20px"}
            h={"20px"}
            onClick={() => {
              handleNumChange("back");
            }}
          />
          <Stack direction={"row"}>{pics}</Stack>
          <IconButton
            aria-label="next Image button"
            children={<ArrowRight size={"18px"} />}
            w={"20px"}
            h={"20px"}
            onClick={() => {
              handleNumChange("next");
            }}
          />
        </Flex>
        <Text>{name}</Text>
        <Text>{"R " + price.toString()}</Text>
      </Box>
    </Box>
  );
}

export default GameItem;
