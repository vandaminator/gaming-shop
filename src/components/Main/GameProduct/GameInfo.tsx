import { Box, Text } from "@chakra-ui/react";
import GameRating from "../Ui/GameRating";
import Ratings from "../Ui/Ratings";
import { Rating } from "../../../utils/data/objects/types/GameDataTypes";

export interface GameInfoProps {
  name: string;
  rating: number;
  ratings: Rating[];
}

function GameInfo({ name, rating, ratings }: GameInfoProps) {
  return (
    <Box my={"20px"} bgColor={"navyBlue"} p={"10px"} borderRadius={"lg"}>
      <Text as="u" fontSize={"3xl"} fontWeight={"bold"}>
        {name}
      </Text>
      <GameRating rating={rating} color={"white"} />
      <Ratings
        ratings={ratings}
        ratingsTextStyles={{
          color: "white",
          fontSize: "18px",
          fontWeight: "semibold",
        }}
      />
    </Box>
  );
}

export default GameInfo;
