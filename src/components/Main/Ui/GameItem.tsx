import { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Box,
  IconButton,
  Image,
  Text,
  Flex,
  Stack,
  Button,
} from "@chakra-ui/react";
import { LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Result } from "../../../utils/data/objects/types/GameListTypes";
import { ArrowLeft, ArrowRight } from "react-feather";

export interface GameItemProps {
  game: Result;
}

function GameItem({ game }: GameItemProps) {
  const { name, price, short_screenshots, id } = game;

  const images = short_screenshots.map((value) => value.image);
  const screenshoots = images.slice(0, 5);

  const [currentNum, setCurrentNum] = useState(0);
  const [bgImage, setBgImage] = useState(screenshoots[0]);

  const handleNumChange = (way: "next" | "back") => {
    const isFirst = currentNum === 0;
    const isLast = currentNum === 4;
    const currentBgIndex = screenshoots.indexOf(bgImage);
    if (way === "next") {
      if (isLast) {
        setCurrentNum(0);
        setBgImage(screenshoots[0]);
      } else {
        setCurrentNum(currentNum + 1);
        setBgImage(screenshoots[currentBgIndex + 1]);
      }
      setBgImage(screenshoots[currentNum]);
    }
    if (way === "back") {
      setBgImage(screenshoots[currentNum]);
      if (isFirst) setCurrentNum(4);
      else setCurrentNum(currentNum - 1);
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
        <Text color={"white"} fontWeight={"semibold"}>
          {name}
        </Text>
        <Text color={"white"} fontWeight={"semibold"}>
          {"R " + price.toString()}
        </Text>
        <LinkBox>
          <LinkOverlay as={ReactRouterLink} to={`/game/${id}`}>
            <Button
              as={motion.button}
              w="full"
              my={"10px"}
              bgColor={"#0c1d2c"}
              color={"white"}
              justifySelf={{ xl: "end" }}
              whileHover={{ scale: "1.1", color: "#0c1d2c" }}
              whileTap={{ scale: "0.9" }}
            >
              More Info
            </Button>
          </LinkOverlay>
        </LinkBox>
      </Box>
    </Box>
  );
}

export default GameItem;
