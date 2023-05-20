import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Rating } from "../../../../utils/data/objects/types/GameDataTypes";
import Ratings from "./Ratings";
import { StarIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { Result } from "../../../../utils/data/objects/types/GameScreenShotsTypes";
import GameRating from "../../Ui/GameRating";
import NavLinkButton from "../../Ui/NavLinkButton";

export interface TopInfoProps {
  id: number
  name: string;
  rating: number;
  ratings: Rating[];
  screenShots: Result[];
  changeImg: React.Dispatch<React.SetStateAction<string>>;
}

function TopInfo({
  id,
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
      {/* <Flex align={"center"} fontWeight={"semibold"}>
        <Text mr={"5px"}>Rating:</Text>
        <StarIcon width={"16px"} height={"16px"} color="yellow" />
        <Text>{rating}</Text>
      </Flex> */}
      <GameRating rating={rating} />
      <Ratings ratings={ratings} />
      <NavLinkButton link={'/game/' + id.toString()} />
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
