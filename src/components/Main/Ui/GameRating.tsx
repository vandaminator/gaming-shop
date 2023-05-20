import { Flex, SystemStyleObject, Text } from "@chakra-ui/react";
import { StarIcon } from "@heroicons/react/20/solid";

import { ChakraProps } from "@chakra-ui/react";

export interface GameRatingProps extends ChakraProps {
  rating: number;
  starSize?: string
  sx?: SystemStyleObject
}

function GameRating(props: GameRatingProps) {
  const { rating, starSize = "16px" } = props
  return (
    <Flex align={"center"} fontWeight={"semibold"} {...props}>
      <Text mr={"5px"}>Rating:</Text>
      <StarIcon width={starSize} height={starSize} color="yellow" />
      <Text>{rating}</Text>
    </Flex>
  );
}

export default GameRating;
