import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Rating } from "../../../../utils/data/objects/types/GameDataTypes";
import Ratings from "./Ratings";
import { StarIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { Result } from "../../../../utils/data/objects/types/GameScreenShotsTypes";

export interface TopInfoProps {
  name: string;
  rating: number;
  ratings: Rating[];
  screenShots: Result[];
  changeImg: React.Dispatch<React.SetStateAction<string>>;
}

function TopInfo({
  name,
  ratings,
  rating,
  screenShots,
  changeImg,
}: TopInfoProps): JSX.Element {
  const images = screenShots.map((value, index) => {
    const { image } = value;
    return (
      <Image
        src={image}
        width={"30%"}
        key={index}
        onClick={() => changeImg(image)}
      />
    );
  });

  return (
    <Flex
      flexDirection={"column"}
      gap={"10px"}
      my={"10px"}
      color={"white"}
      grow={"1"}
    >
      <Text fontWeight={"bold"} fontSize={"2xl"}>
        {name}
      </Text>
      <Flex align={"center"} fontWeight={"semibold"}>
        <Text mr={"5px"}>Rating:</Text>
        <StarIcon width={"16px"} height={"16px"} color="yellow" />
        <Text>{rating}</Text>
      </Flex>
      <Ratings ratings={ratings} />
      <Button
        as={motion.button}
        bgColor={"#0c1d2c"}
        my={"10px"}
        justifySelf={{ xl: "end" }}
        whileHover={{ scale: "1.1", color: "#0c1d2c" }}
        whileTap={{ scale: "0.9" }}
      >
        More Info
      </Button>
      <Flex
        p={"5px"}
        display={{ base: "none", xl: "flex" }}
        alignSelf={{ xl: "end" }}
        bgColor={"#7a93a8"}
        wrap={"wrap"}
        gap={"10px"}
      >
        {images}
      </Flex>
    </Flex>
  );
}

export default TopInfo;
