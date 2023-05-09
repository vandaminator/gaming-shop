import { AspectRatio, Box, Flex, Image, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { storeProps } from "../../../types";
import MobileTopGames from "./MobileTopGames";
import DesktopTopGames from "./DesktopTopGames";

export interface TopGamesProps {
  background_image: string;
  name: string;
  description_raw: string;
}

function TopGames() {
  const gameDb = useSelector((state: storeProps) => state.gameDb.data);
  const topGames = gameDb.showTopGames(5);
  const { background_image, name, description_raw } = topGames[1];
  return (
    <>
      <MobileTopGames
        background_image={background_image}
        name={name}
        description_raw={description_raw}
      />
      <DesktopTopGames
        background_image={background_image}
        name={name}
        description_raw={description_raw}
      />
    </>
  );
}

export default TopGames;
